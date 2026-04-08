package mn.ld95;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;


public class PasswordHashGenerator {
	public static void main(String[] args) {
		String passwordString = "admin123";
		String hash= hashPassword(passwordString);
		System.out.println("SHA-256 hash for 'admin123':" + hash);
	}
	private static String hashPassword(String password) {
		try {
			MessageDigest mDigest= MessageDigest.getInstance("SHA-256");
			byte[] hash = mDigest.digest(password.getBytes());
			return Base64.getEncoder().encodeToString(hash);
		} catch (NoSuchAlgorithmException e) {
			throw new RuntimeException("Error hashing password", e);
		}
	}
}
