package mn.lesson_day_95;

import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.nio.charset.StandardCharsets;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class AuthHandler implements HttpHandler {
    private static final String DB_URL = "jdbc:postgresql://localhost:5433/school_management_system";
    private static final String DB_USER = "postgres";
    private static final String DB_PASSWORD = "postgres";
    
    @Override
    public void handle(HttpExchange exchange) throws IOException {
        String method = exchange.getRequestMethod();
        String path = exchange.getRequestURI().getPath();
        
        // Add CORS headers
        exchange.getResponseHeaders().set("Access-Control-Allow-Origin", "http://localhost:5173");
        exchange.getResponseHeaders().set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
        exchange.getResponseHeaders().set("Access-Control-Allow-Headers", "Content-Type, Authorization");
        
        if ("OPTIONS".equals(method)) {
            exchange.sendResponseHeaders(200, -1);
            return;
        }
        
        try {
            if (path.equals("/auth/login") && "POST".equals(method)) {
                handleLogin(exchange);
            } else if (path.equals("/auth/register") && "POST".equals(method)) {
                handleRegister(exchange);
            } else if (path.equals("/auth/me") && "GET".equals(method)) {
                handleGetCurrentUser(exchange);
            } else {
                sendResponse(exchange, 404, "{\"error\":\"Endpoint not found\"}");
            }
        } catch (SQLException e) {
            e.printStackTrace();
            sendResponse(exchange, 500, "{\"error\":\"Database error\"}");
        } catch (ParseException e) {
            e.printStackTrace();
            sendResponse(exchange, 400, "{\"error\":\"Invalid JSON\"}");
        }
    }
    
    private void handleLogin(HttpExchange exchange) throws IOException, SQLException, ParseException {
        String requestBody = readRequestBody(exchange);
        JSONParser parser = new JSONParser();
        JSONObject jsonData = (JSONObject) parser.parse(requestBody);
        
        String username = (String) jsonData.get("username");
        String password = (String) jsonData.get("password");
        
        if (username == null || password == null) {
            sendResponse(exchange, 400, "{\"error\":\"Username and password are required\"}");
            return;
        }
        
        try (Connection conn = getConnection()) {
            AuthService.User user = AuthService.authenticateUser(conn, username, password);
            
            if (user != null) {
                String token = JWTUtil.generateToken(user.getUsername(), user.getRole(), user.getUserId());
                
                JSONObject response = new JSONObject();
                response.put("token", token);
                response.put("user", createUserJSON(user));
                response.put("message", "Login successful");
                
                sendResponse(exchange, 200, response.toJSONString());
            } else {
                sendResponse(exchange, 401, "{\"error\":\"Invalid credentials\"}");
            }
        }
    }
    
    private void handleRegister(HttpExchange exchange) throws IOException, SQLException, ParseException {
        String requestBody = readRequestBody(exchange);
        JSONParser parser = new JSONParser();
        JSONObject jsonData = (JSONObject) parser.parse(requestBody);
        
        String username = (String) jsonData.get("username");
        String email = (String) jsonData.get("email");
        String password = (String) jsonData.get("password");
        String role = jsonData.containsKey("role") ? (String) jsonData.get("role") : "USER";
        
        if (username == null || email == null || password == null) {
            sendResponse(exchange, 400, "{\"error\":\"Username, email, and password are required\"}");
            return;
        }
        
        try (Connection conn = getConnection()) {
            AuthService.User user = AuthService.createUser(conn, username, email, password, role);
            
            if (user != null) {
                String token = JWTUtil.generateToken(user.getUsername(), user.getRole(), user.getUserId());
                
                JSONObject response = new JSONObject();
                response.put("token", token);
                response.put("user", createUserJSON(user));
                response.put("message", "Registration successful");
                
                sendResponse(exchange, 201, response.toJSONString());
            } else {
                sendResponse(exchange, 400, "{\"error\":\"Failed to create user. Username or email may already exist.\"}");
            }
        }
    }
    
    private void handleGetCurrentUser(HttpExchange exchange) throws IOException {
        String authHeader = exchange.getRequestHeaders().getFirst("Authorization");
        
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            sendResponse(exchange, 401, "{\"error\":\"Authorization token required\"}");
            return;
        }
        
        String token = authHeader.substring(7);
        String username = JWTUtil.getUsernameFromToken(token);
        String role = JWTUtil.getRoleFromToken(token);
        Integer userId = JWTUtil.getUserIdFromToken(token);
        
        if (username != null && role != null && userId != null) {
            JSONObject userJson = new JSONObject();
            userJson.put("userId", userId);
            userJson.put("username", username);
            userJson.put("role", role);
            
            sendResponse(exchange, 200, userJson.toJSONString());
        } else {
            sendResponse(exchange, 401, "{\"error\":\"Invalid token\"}");
        }
    }
    
    private JSONObject createUserJSON(AuthService.User user) {
        JSONObject userJson = new JSONObject();
        userJson.put("userId", user.getUserId());
        userJson.put("username", user.getUsername());
        userJson.put("email", user.getEmail());
        userJson.put("role", user.getRole());
        return userJson;
    }
    
    private String readRequestBody(HttpExchange exchange) throws IOException {
        InputStreamReader isr = new InputStreamReader(exchange.getRequestBody(), StandardCharsets.UTF_8);
        BufferedReader br = new BufferedReader(isr);
        
        StringBuilder requestBody = new StringBuilder();
        String line;
        while ((line = br.readLine()) != null) {
            requestBody.append(line);
        }
        
        br.close();
        return requestBody.toString();
    }
    
    private void sendResponse(HttpExchange exchange, int statusCode, String response) throws IOException {
        exchange.getResponseHeaders().set("Content-Type", "application/json");
        exchange.sendResponseHeaders(statusCode, response.getBytes(StandardCharsets.UTF_8).length);
        
        OutputStream outputStream = exchange.getResponseBody();
        outputStream.write(response.getBytes(StandardCharsets.UTF_8));
        outputStream.close();
    }
    
    private Connection getConnection() throws SQLException {
        return DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);
    }
}
