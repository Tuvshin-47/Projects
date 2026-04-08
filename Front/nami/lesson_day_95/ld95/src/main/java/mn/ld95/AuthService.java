package mn.ld95;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.sql.*;
import java.util.Base64;

public class AuthService {
    
    public static class User {
        private int userId;
        private String username;
        private String email;
        private String role;
        
        public User(int userId, String username, String email, String role) {
            this.userId = userId;
            this.username = username;
            this.email = email;
            this.role = role;
        }
        
        // Getters
        public int getUserId() { return userId; }
        public String getUsername() { return username; }
        public String getEmail() { return email; }
        public String getRole() { return role; }
    }
    
    public static User authenticateUser(Connection conn, String username, String password) throws SQLException {
        String sql = "SELECT user_id, username, email, password_hash, role FROM users WHERE username = ? AND is_active = true";
        
        try (PreparedStatement pstmt = conn.prepareStatement(sql)) {
            pstmt.setString(1, username);
            
            try (ResultSet rs = pstmt.executeQuery()) {
                if (rs.next()) {
                    String storedHash = rs.getString("password_hash");
                    
                    // Simple password verification (in production, use bcrypt)
                    if (verifyPassword(password, storedHash)) {
                        return new User(
                            rs.getInt("user_id"),
                            rs.getString("username"),
                            rs.getString("email"),
                            rs.getString("role")
                        );
                    }
                }
            }
        }
        return null;
    }
    
    public static User createUser(Connection conn, String username, String email, String password, String role) throws SQLException {
        String sql = "INSERT INTO users (username, email, password_hash, role) VALUES (?, ?, ?, ?) RETURNING user_id";
        
        try (PreparedStatement pstmt = conn.prepareStatement(sql)) {
            pstmt.setString(1, username);
            pstmt.setString(2, email);
            pstmt.setString(3, hashPassword(password));
            pstmt.setString(4, role);
            
            try (ResultSet rs = pstmt.executeQuery()) {
                if (rs.next()) {
                    int userId = rs.getInt("user_id");
                    return new User(userId, username, email, role);
                }
            }
        }
        return null;
    }
    
    private static String hashPassword(String password) {
        try {
        	MessageDigest md = MessageDigest.getInstance("SHA-256");
            byte[] hash = md.digest(password.getBytes());
            return Base64.getEncoder().encodeToString(hash);
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException("Error hashing password", e);
        }
    }
    
    private static boolean verifyPassword(String password, String storedHash) {
        return hashPassword(password).equals(storedHash);
    }
}