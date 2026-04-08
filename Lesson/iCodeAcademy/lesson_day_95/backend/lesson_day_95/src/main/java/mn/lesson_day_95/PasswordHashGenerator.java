package mn.lesson_day_95;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;

public class PasswordHashGenerator {

	 public static void main(String[] args) {
	        String password = "admin123";
	        String hash = hashPassword(password);
	        System.out.println("SHA-256 hash for 'admin123': " + hash);
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

}
