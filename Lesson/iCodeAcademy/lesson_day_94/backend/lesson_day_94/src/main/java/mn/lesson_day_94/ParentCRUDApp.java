package mn.lesson_day_94;

import java.sql.Connection;
import java.sql.Date;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Scanner;


public class ParentCRUDApp {
	private static final String urlString = "jdbc:postgresql://localhost:5433/school_management_system";
	private static final String userString = "postgres";
	private static final String passwordString = "postgres";

	private static Connection connection = null;

	public static void main(String[] args) {
		try {
			connection = DriverManager.getConnection(urlString, userString, passwordString);
			System.out.println("Connected Successfully to PostgreSQL!");
			Scanner scanner = new Scanner(System.in);
			boolean exit = false;
			while (!exit) {
				// Display Menu
				System.out.println("\n=== Parent Management System ===");
				System.out.println("1. View all parents");
				System.out.println("2. Find parent by ID");
				System.out.println("3. Add new parent");
				System.out.println("4. Update parent information");
				System.out.println("5. Delete parent");
				System.out.println("6. View parent's children");
				System.out.println("0. Exit");
				System.out.println("Enter your choice: ");

				// get user input
				int choice = scanner.nextInt();
				scanner.nextLine(); // consume new line
				switch (choice) {
				case 1:
					System.out.println("Get All Parents");
					getAllParents();
					break;
				case 2:
					System.out.println("Enter parent ID: ");
					int id = scanner.nextInt();
					scanner.nextLine();
					getParentById(id);
					break;
				case 3:
					System.out.println("\n-- Add New Parent --");
					System.out.println("Enter Parent ID: ");
					int newId = scanner.nextInt();
					scanner.nextLine();

					System.out.println("Enter first name: ");
					String firstName = scanner.nextLine();

					System.out.println("Enter last name: ");
					String lastName = scanner.nextLine();

					System.out.println("Enter Relationship (Father/Mother/Guardian): ");
					String relationShip = scanner.nextLine();

					System.out.println("Enter phone number: ");
					String phone = scanner.nextLine();

					System.out.println("Enter email: ");
					String email = scanner.nextLine();

					System.out.println("Enter address: ");
					String address = scanner.nextLine();

					addParent(newId, firstName, lastName, relationShip, phone, email, address);

					break;
				case 4:
					System.out.println("\n-- Update Parent Information --");
					System.out.println("Enter parent ID to update: ");
					int updateId = scanner.nextInt();
					scanner.nextLine();

					if (!parentExists(updateId)) {
						System.out.println("Parent with ID: " + updateId + " does not exist.");
						break;
					}

					System.out.println("Enter new phone number: ");
					String newPhone = scanner.nextLine();

					System.out.println("Enter new email: ");
					String newEmail = scanner.nextLine();

					System.out.println("Enter new address: ");
					String newAddress = scanner.nextLine();

					updateParent(updateId, newPhone, newEmail, newAddress);

					break;
				case 5:
					System.out.println("Enter parent ID to delete: ");
					int deleteId = scanner.nextInt();
					scanner.nextLine();
					if(!parentExists(deleteId)) {
						System.out.println("Parent with ID " + deleteId);
						break;
					}
					
					if (hasChildren(deleteId)) {
						System.out.println("This parent has children registered in the system");
						System.out.println("Deleting this parent will set their children's parent+id to NULL. Continue? (y/n): ");
					} else {
						System.out.println("Are you sure you want to delete this parent? (y/n): ");
					}
					String confirm = scanner.nextLine();
					if(confirm.equalsIgnoreCase("y")) {
						deleteParent(deleteId);
					}
					
					break;
				case 6:
					System.out.println("Enter parent ID: ");
					int parentId = scanner.nextInt();
					scanner.nextLine();
					
					if(!parentExists(parentId)) {
						System.out.println("Parent with ID " + parentId + " does not exist.");
						break;
					}
					
					viewParentChildren(parentId);
					break;
				case 0:
					exit = true;
					System.out.println("Exiting the application. Goodbye!");
					break;
				default:
					System.out.println("Invalid Choice: Please try again");
				}
			}

		} catch (SQLException ex) {
			System.out.println("Database Error: " + ex.getMessage());
			ex.printStackTrace();
		} finally {
			if (connection != null) {
				try {
					connection.close();
					System.out.println("Database connection closed");
				} catch (Exception e) {
					System.out.println("Error closing the connection!" + e.getMessage());
				}
			}
		}
	}

	private static void viewParentChildren(int parentId) throws SQLException {
		String sqlString = "SELECT s.student_id, s.first_name, s.last_name, c.class_name, "
				+ "s.date_of_birth, s.gender "
				+ " FROM students s "
				+ "JOIN classes c on s.class_id = c.class_id "
				+ "WHERE s.parent_id = ? "
				+ "ORDER BY s.student_id";
		try(PreparedStatement pstmt = connection.prepareStatement(sqlString)){
			pstmt.setInt(1, parentId);
			try(ResultSet rs = pstmt.executeQuery()){
				System.out.println("\n--- Children of Parent ID: " + parentId + " --");
				System.out.println("ID | Name | Date of Birth | Gender | Class");
				System.out.println("-------------------------------------------");
				
				boolean hasRecords = false;
				while(rs.next()) {
					hasRecords = true;
					int id = rs.getInt("student_id");
					String nameString = rs.getString("first_name") + " " + rs.getString("last_name");
					Date dobDate = rs.getDate("date_of_birth");
					String genderString = rs.getString("gender");
					String classNameString = rs.getString("class_name");
					System.out.println(id + " | " + nameString + " | " + dobDate + " | " + genderString + " | " + classNameString);
				}
				
				if (!hasRecords) {
					System.out.println("This parent has no children registered in the system.");
				}
				
			}
		}
	}

	private static void deleteParent(int deleteId) throws SQLException{
		connection.setAutoCommit(false);
		
		try {
			String updateChildrenSql = "UPDATE students SET parent_id = NULL WHERE parent_id = ?";
			try(PreparedStatement  pstmt = connection.prepareStatement(updateChildrenSql)){
				pstmt.setInt(1, deleteId);
				pstmt.executeUpdate();
			}
			
			String deleteParentSql = "DELETE FROM parents WHERE parent_id = ?";
			try(PreparedStatement pstmt = connection.prepareStatement(deleteParentSql)){
				pstmt.setInt(1, deleteId);
				int rowsDeleted = pstmt.executeUpdate();
				if (rowsDeleted > 0) {
					System.out.println("Parent deleted successfully!");
					connection.commit();
				} else {
					System.out.println("Parent deletion failed");
					connection.rollback();
				}
				
			}
		} catch (SQLException e) {
			connection.rollback();
			throw e;
		} finally {
			connection.setAutoCommit(true);
		}
		
	}

	private static boolean hasChildren(int deleteId) throws SQLException {
		String sqlString = "SELECT 1 FROM students where parent_id = ? LIMIT 1";
		try(PreparedStatement  pstmt = connection.prepareStatement(sqlString)){
			pstmt.setInt(1, deleteId);
			try(ResultSet rSet = pstmt.executeQuery()){
				return rSet.next();
			}
		}
	}

	private static void getParentById(int id) throws SQLException {
		String sqString = "SELECT * FROM parents WHERE parent_id = ?";
		try (PreparedStatement pstmt = connection.prepareStatement(sqString)) {
			pstmt.setInt(1, id);
			try (ResultSet rs = pstmt.executeQuery()) {
				if (rs.next()) {
					System.out.println("\n--- Parent Details ---");
					System.out.println("ID: " + rs.getInt("parent_id"));
					System.out.println("Name: " + rs.getString("first_name") + " " + rs.getString("last_name")) ;
					System.out.println("Relationship: " + rs.getString("relationship"));
					System.out.println("Phone: " + rs.getString("phone_number"));
					System.out.println("Email: " + rs.getString("email"));
					System.out.println("Address: " + rs.getString("address"));
					
				} else {
					System.out.println("No parent found with ID: " + id);
				}
			}
		}
	}

	private static void updateParent(int updateId, String newPhone, String newEmail, String newAddress)
			throws SQLException {
		String sqlString = "UPDATE parents SET phone_number = ?, email = ?, address = ? WHERE parent_id = ?";
		try (PreparedStatement pstmt = connection.prepareStatement(sqlString)) {
			pstmt.setString(1, newPhone);
			pstmt.setString(2, newEmail);
			pstmt.setString(3, newAddress);
			pstmt.setInt(4, updateId);

			int rowsUpdated = pstmt.executeUpdate();
			if (rowsUpdated > 0) {
				System.out.println("Parent information updated successfully!");
			}
		}
	}

	private static boolean parentExists(int updateId) throws SQLException {
		String sqlString = "SELECT 1 FROM parents WHERE parent_id = ?";
		try (PreparedStatement pstmt = connection.prepareStatement(sqlString)) {

			pstmt.setInt(1, updateId);

			try (ResultSet rs = pstmt.executeQuery()) {
				return rs.next();
			}
		}
	}

	private static void addParent(int newId, String firstName, String lastName, String relationShip, String phone,
			String email, String address) throws SQLException {
		String sqlString = "INSERT INTO parents(parent_id, first_name, last_name, relationship, "
				+ "phone_number, email, address) VALUES (?, ?, ?, ?, ?, ?, ?)";
		try (PreparedStatement pStatement = connection.prepareStatement(sqlString)) {
			pStatement.setInt(1, newId);
			pStatement.setString(2, firstName);
			pStatement.setString(3, lastName);
			pStatement.setString(4, relationShip);
			pStatement.setString(5, phone);
			pStatement.setString(6, email);
			pStatement.setString(7, address);

			int rowInserted = pStatement.executeUpdate();
			if (rowInserted > 0) {
				System.out.println("Parent added successfully!");
			}
		}
	}

	private static void getAllParents() throws SQLException {
		String sqlString = "SELECT parent_id, first_name, last_name, relationship, phone_number FROM parents ORDER BY parent_id";
		try (Statement statement = connection.createStatement(); ResultSet rSet = statement.executeQuery(sqlString)) {
			System.out.println("\n-- All Parents --");
			System.out.println("ID | NAME | RELATIONSHIP | Phone Number");
			System.out.println("---------------------------------------");
			boolean hasRecords = false;
			while (rSet.next()) {
				hasRecords = true;
				int id = rSet.getInt("parent_id");
				String name = rSet.getString("first_name") + " " + rSet.getString("last_name");
				String relationshipString = rSet.getString("relationship");
				String phoneString = rSet.getString("phone_number");
				System.out.println(id + " | " + name + " | " + relationshipString + " | " + phoneString);

			}
			if (!hasRecords) {
				System.out.println("No parents found");
			}
		}
	}

}
