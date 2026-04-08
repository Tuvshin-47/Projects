package mn.lesson_day_95;

import com.sun.net.httpserver.*;


import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.InetSocketAddress;
import java.nio.charset.StandardCharsets;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.HashMap;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import org.json.simple.parser.ParseException;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

public class ParentRestApi {

//	JDBC database connection details
	private static final String DB_URL = "jdbc:postgresql://localhost:5433/school_management_system";
	private static final String DB_USER = "postgres";
	private static final String DB_PASSWORD = "postgres";

	// server port
	private static final int PORT = 8080;

	public static void main(String[] args) throws IOException {
		HttpServer server = HttpServer.create(new InetSocketAddress(PORT), 0);

		// Add authentication endpoints
        server.createContext("/auth", new AuthHandler());
        
		// context parent end points
//		server.createContext("/api/parents", new ParentHandler());
        server.createContext("/api/parents", new AuthenticatedParentHandler());

		server.setExecutor(null);

		// start the server
		server.start();
		System.out.println("Server started on port " + PORT);
		System.out.println("Parent REST API endpoints: ");
		System.out.println("GET     /api/parents                - GET all parents");
		System.out.println("GET     /api/parents/{id}           - GET parent by id");
		System.out.println("POST    /api/parents         		- Create a new parent");
		System.out.println("PUT     /api/parents/{id}   	 	- Update parent");
		System.out.println("DELETE  /api/parents/{id}    		- Delete parent");
		System.out.println("GET     /api/parents/{id}/children  - GET all children by parent id");
		System.out.println("Authentication endpoints:");
        System.out.println("POST /auth/login");
        System.out.println("POST /auth/register");
        System.out.println("GET  /auth/me");
	}

	static class ParentHandler implements HttpHandler {

		@Override
		public void handle(HttpExchange exchange) throws IOException {
			String method = exchange.getRequestMethod();
			String path = exchange.getRequestURI().getPath();

			// extract id from path if present
			Pattern pattern = Pattern.compile("/api/parents/(\\d+)(?:/children)?");
			Matcher matcher = pattern.matcher(path);
			Integer id = null;
			boolean isChildrenEndpoint = false;

			if (matcher.find()) {
				id = Integer.parseInt(matcher.group(1));
				isChildrenEndpoint = path.endsWith("/children");
			}

			try {
				switch (method) {
				case "GET":
//					
					if (id != null) {
						getParentById(id, exchange);
					} else if (id != null && isChildrenEndpoint) {
						System.out.println("Hi");
						getChildrenByParentId(exchange, id);
					} else {
						getAllParents(exchange);
					}
					break;
				case "POST":
					if (id == null) {
						createParent(exchange);
					} else {
						sendResponse(exchange, 405, "Method not allowed");
					}
					break;
				case "PUT":
					if (id != null) {
						updateParent(exchange, id);
					} else {
						sendResponse(exchange, 400, "Parent ID required");
					}
					break;
				case "DELETE":
					if (id != null) {
						deleteParent(exchange, id);
					} else {
						sendResponse(exchange, 400, "Parent ID required");
					}
					break;
				case "OPTIONS":
					// handle preflight requests
					exchange.getResponseHeaders().set("Access-Control-Allow-Origin", "http://localhost:5173");
					exchange.getResponseHeaders().set("Access-Control-Allow-Methods",
							"GET, POST, PUT, DELETE, OPTIONS");
					exchange.getResponseHeaders().set("Access-Control-Allow-Headers", "Content-Type");
					exchange.sendResponseHeaders(200, -1);
					break;
				default:
					break;
				}

			} catch (SQLException ex) {
				ex.printStackTrace();
				sendResponse(exchange, 500, "Database Error: " + ex.getMessage());
			} catch (ParseException e) {
				e.printStackTrace();
				sendResponse(exchange, 400, "Invalid JSON: " + e.getMessage());
			}
		}

		private void getChildrenByParentId(HttpExchange exchange, Integer id) {
			// TODO Auto-generated method stub

		}

		private void deleteParent(HttpExchange exchange, Integer id) {

		}

		private void updateParent(HttpExchange exchange, Integer id) throws IOException, SQLException, ParseException {
			String requestBody = readRequestBody(exchange);
			JSONParser parser = new JSONParser();
			JSONObject jsonData = (JSONObject) parser.parse(requestBody);
			Connection conn = null;
			try {
				conn = getConnection();

				if (!parentExists(conn, id)) {
					sendResponse(exchange, 404, "Parent with id " + id + " not found");
					return;
				}

				StringBuilder sqlBuilder = new StringBuilder("UPDATE parents SET ");
				Map<String, Object> params = new HashMap<>();
				if (jsonData.containsKey("firstName")) {
					sqlBuilder.append("first_name = ?, ");
					params.put("firstName", jsonData.get("firstName"));
				}
				if (jsonData.containsKey("lastName")) {
					sqlBuilder.append("last_name = ?, ");
					params.put("lastName", jsonData.get("lastName"));
				}
				if (jsonData.containsKey("phoneNumber")) {
					sqlBuilder.append("phone_number = ?, ");
					params.put("phoneNumber", jsonData.get("phoneNumber"));
				}

				if (jsonData.containsKey("email")) {
					sqlBuilder.append("email = ?, ");
					params.put("email", jsonData.get("email"));
				}

				if (jsonData.containsKey("address")) {
					sqlBuilder.append("address = ?, ");
					params.put("address", jsonData.get("address"));
				}
				if (params.isEmpty()) {
					sendResponse(exchange, 400, "No fields to update");
					return;
				}

				String sql = sqlBuilder.substring(0, sqlBuilder.length() - 2) + " WHERE parent_id = ?";

				PreparedStatement pstmt = conn.prepareStatement(sql);

				int paramIndex = 1;
				if (params.containsKey("firstName")) {
					pstmt.setString(paramIndex++, (String) params.get("firstName"));
				}
				if (params.containsKey("lastName")) {
					pstmt.setString(paramIndex++, (String) params.get("lastName"));
				}

				if (params.containsKey("relationship")) {
					pstmt.setString(paramIndex++, (String) params.get("relationship"));
				}
				if (params.containsKey("phoneNumber")) {
					pstmt.setString(paramIndex++, (String) params.get("phoneNumber"));
				}
				if (params.containsKey("email")) {
					pstmt.setString(paramIndex++, (String) params.get("email"));
				}
				if (params.containsKey("address")) {
					pstmt.setString(paramIndex++, (String) params.get("address"));
				}
				pstmt.setInt(paramIndex, id);
				int rowsUpdated = pstmt.executeUpdate();

				if (rowsUpdated > 0) {
					JSONObject response = new JSONObject();
					response.put("message", "Parent updated successfully");
					response.put("id", id);
					sendResponse(exchange, 200, response.toJSONString());
				} else {
					sendResponse(exchange, 500, "Failed to update parent");
				}
				pstmt.close();

			} finally {
				if (conn != null) {
					conn.close();
				}
			}
		}

		private boolean parentExists(Connection conn, int id) throws SQLException {
			String sql = "SELECT 1 FROM parents WHERE parent_id = ?";
			PreparedStatement pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, id);

			ResultSet rSet = pstmt.executeQuery();
			boolean exists = rSet.next();

			rSet.close();
			pstmt.close();
			return exists;
		}

		// POST create new parent
		private void createParent(HttpExchange exchange) throws IOException, SQLException, ParseException {
			// Parse request body
			String requestBody = readRequestBody(exchange);
			JSONParser parser = new JSONParser();
			JSONObject jsonData = (JSONObject) parser.parse(requestBody);

			Connection conn = null;
			try {
				conn = getConnection();

				// Validate required fields
				if (!jsonData.containsKey("firstName") || !jsonData.containsKey("lastName")
						|| !jsonData.containsKey("relationship")) {
					sendResponse(exchange, 400, "First name, last name, and relationship are required");
					return;
				}

				int parentsCount = getParentsCount();

				String sql = "INSERT INTO parents (parent_id, first_name, last_name, relationship, "
						+ "phone_number, email, address) " + "VALUES (?, ?, ?, ?, ?, ?, ?) RETURNING parent_id";

				PreparedStatement pstmt = conn.prepareStatement(sql);
				int newParentId = parentsCount + 1;
				pstmt.setInt(1, newParentId);
				pstmt.setString(2, (String) jsonData.get("firstName"));
				pstmt.setString(3, (String) jsonData.get("lastName"));
				pstmt.setString(4, (String) jsonData.get("relationship"));
				pstmt.setString(5, jsonData.containsKey("phoneNumber") ? (String) jsonData.get("phoneNumber") : null);
				pstmt.setString(6, jsonData.containsKey("email") ? (String) jsonData.get("email") : null);
				pstmt.setString(7, jsonData.containsKey("address") ? (String) jsonData.get("address") : null);

				ResultSet rs = pstmt.executeQuery();

				if (rs.next()) {
					int newId = rs.getInt("parent_id");

					JSONObject response = new JSONObject();
					response.put("message", "Parent created successfully");
					response.put("id", newId);

					sendResponse(exchange, 201, response.toJSONString());
				} else {
					sendResponse(exchange, 500, "Failed to create parent");
				}

				rs.close();
				pstmt.close();
			} finally {
				if (conn != null) {
					conn.close();
				}
			}
		}

		private int getParentsCount() throws SQLException {
			String sqlString = "SELECT COUNT(*) FROM parents";
			try (Connection connection = getConnection()) {
				Statement statement = connection.createStatement();
				ResultSet rs = statement.executeQuery(sqlString);
				if (rs.next()) {
					return rs.getInt(1);
				}

			}
			return 0;
		}

		private String readRequestBody(HttpExchange exchange) throws IOException {
			InputStreamReader inputStream = new InputStreamReader(exchange.getRequestBody(), StandardCharsets.UTF_8);
			BufferedReader bReader = new BufferedReader(inputStream);

			StringBuilder requestBody = new StringBuilder();
			String line;
			while ((line = bReader.readLine()) != null) {
				requestBody.append(line);
			}

			return requestBody.toString();
		}

		private void getParentById(Integer id, HttpExchange exchange) throws IOException, SQLException {
			Connection conn = null;
			try {
				conn = getConnection();

				String sql = "SELECT * FROM parents WHERE parent_id = ?";

				PreparedStatement pstmt = conn.prepareStatement(sql);
				pstmt.setInt(1, id);

				ResultSet rs = pstmt.executeQuery();

				if (rs.next()) {
					JSONObject parent = new JSONObject();
					parent.put("id", rs.getInt("parent_id"));
					parent.put("firstName", rs.getString("first_name"));
					parent.put("lastName", rs.getString("last_name"));
					parent.put("relationship", rs.getString("relationship"));
					parent.put("phoneNumber", rs.getString("phone_number"));
					parent.put("email", rs.getString("email"));
					parent.put("address", rs.getString("address"));

					// Get child count
					int childCount = getChildCount(conn, id);
					parent.put("childCount", childCount);

					sendResponse(exchange, 200, parent.toJSONString());
				} else {
					sendResponse(exchange, 404, "Parent with ID " + id + " not found");
				}

				rs.close();
				pstmt.close();
			} finally {
				if (conn != null) {
					conn.close();
				}
			}
		}

		private int getChildCount(Connection conn, Integer id) throws SQLException {
			String sql = "SELECT COUNT(*) FROM students WHERE parent_id = ?";

			PreparedStatement pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, id);

			ResultSet rs = pstmt.executeQuery();
			int count = 0;

			if (rs.next()) {
				count = rs.getInt(1);
			}

			rs.close();
			pstmt.close();

			return count;
		}

		private void getAllParents(HttpExchange exchange) throws IOException, SQLException {
			Connection connection = null;
			try {
				connection = getConnection();

				String sql = "SELECT parent_id, first_name, last_name, relationship, phone_number, email "
						+ " FROM parents ORDER BY parent_id";
				Statement stmt = connection.createStatement();
				ResultSet rs = stmt.executeQuery(sql);

				JSONArray parentsArray = new JSONArray();
				while (rs.next()) {
					JSONObject parent = new JSONObject();
					parent.put("id", rs.getInt("parent_id"));
					parent.put("firstName", rs.getString("first_name"));
					parent.put("lastName", rs.getString("last_name"));
					parent.put("relationship", rs.getString("relationship"));
					parent.put("phoneNumber", rs.getString("phone_number"));
					parent.put("email", rs.getString("email"));
					parentsArray.add(parent);
				}
				sendResponse(exchange, 200, parentsArray.toJSONString());
				rs.close();
				stmt.close();

			} finally {
				if (connection != null) {
					connection.close();
				}
			}
		}

		private Connection getConnection() throws SQLException {
			return DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);
		}
		
		
		private void sendResponse(HttpExchange exchange, int statusCode, String response) throws IOException {

//			add cors headers
			exchange.getResponseHeaders().set("Content-Type", "application/json");
			exchange.getResponseHeaders().set("Access-Control-Allow-Origin", "http://localhost:5173");
			exchange.getResponseHeaders().set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
			exchange.getResponseHeaders().set("Access-Control-Allow-Headers", "Content-Type");

			exchange.sendResponseHeaders(statusCode, response.getBytes(StandardCharsets.UTF_8).length);

			OutputStream outputStream = exchange.getResponseBody();
			outputStream.write(response.getBytes(StandardCharsets.UTF_8));
			outputStream.close();
		}

	}
	
	static class AuthenticatedParentHandler implements HttpHandler {
        private final ParentHandler parentHandler = new ParentHandler();
        
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            // Add CORS headers
            exchange.getResponseHeaders().set("Access-Control-Allow-Origin", "http://localhost:5173");
            exchange.getResponseHeaders().set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
            exchange.getResponseHeaders().set("Access-Control-Allow-Headers", "Content-Type, Authorization");
            
            if ("OPTIONS".equals(exchange.getRequestMethod())) {
                exchange.sendResponseHeaders(200, -1);
                return;
            }
            
            // Check authentication for non-GET requests or if you want to protect all endpoints
            String method = exchange.getRequestMethod();
            if (!method.equals("GET")) {  // Require auth for modifying operations
                String authHeader = exchange.getRequestHeaders().getFirst("Authorization");
                
                if (authHeader == null || !authHeader.startsWith("Bearer ")) {
                    sendResponse(exchange, 401, "{\"error\":\"Authorization required\"}");
                    return;
                }
                
                String token = authHeader.substring(7);
                if (JWTUtil.validateToken(token) == null) {
                    sendResponse(exchange, 401, "{\"error\":\"Invalid token\"}");
                    return;
                }
            }
            
            // If authenticated or GET request, proceed to parent handler
            parentHandler.handle(exchange);
        }
        
        private void sendResponse(HttpExchange exchange, int statusCode, String response) throws IOException {
            exchange.getResponseHeaders().set("Content-Type", "application/json");
            exchange.sendResponseHeaders(statusCode, response.getBytes(StandardCharsets.UTF_8).length);
            
            OutputStream outputStream = exchange.getResponseBody();
            outputStream.write(response.getBytes(StandardCharsets.UTF_8));
            outputStream.close();
        }
    }

}
