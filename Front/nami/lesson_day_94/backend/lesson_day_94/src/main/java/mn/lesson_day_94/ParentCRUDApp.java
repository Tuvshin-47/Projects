package mn.lesson_day_94;

import java.sql.Statement;
import java.lang.reflect.Method;
import java.sql.Connection;
import java.sql.Date;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Scanner;

public class ParentCRUDApp {
	private static final String urlString = "jdbc:postgresql://localhost:5432/school_management_system";
	private static final String userString = "postgres";
	private static final String passwordString = "postgres";
	private static Connection connection = null;

	public static void main(String[] args) {

		try {
			connection = DriverManager.getConnection(urlString, userString, passwordString);
			System.out.println("connected succesfully to postresql");
			Scanner scanner = new Scanner(System.in);
			boolean exit = false;
			while (!exit) {
				// display menu
				System.out.println("\n=== Parent Management System ===");
				System.out.println("1. View all parents");
				
				System.out.println("2. Find parent by ID");
				System.out.println("3. Add new parent");
				System.out.println("4. Update parent information");
				System.out.println("5. Delete parent");
				System.out.println("6. View parent's children");
				System.out.println("0. Exit");
				System.out.println("Enter  your code");
				// get user input
				int choice = scanner.nextInt();
				scanner.nextLine();
				switch (choice) {
				case 1:
					System.out.println("Get all parents");
					getAllParents();
					
					break;
				case 2:
					System.out.println("Enter parent ID");
					int id = scanner.nextInt();
					scanner.nextLine();
					getParentById(id);
					break;
				case 3:
					System.out.println("\n=== Add new Parent ===");
					System.out.println("Enter your parent ID");
					int newId= scanner.nextInt();
					scanner.nextLine();
					System.out.println("Enter your first name:");
					String firstname= scanner.nextLine();
					
					System.out.println("Enter your last name:");
					String lastname= scanner.nextLine();
					
					System.out.println("Enter relationship:");
					String relationship= scanner.nextLine();
					System.out.println("Enter PhoneNUmber:");
					String phone= scanner.nextLine();
					
					System.out.println("Enter email:");
					String email= scanner.nextLine();
					
					System.out.println("Enter address:");
					String address= scanner.nextLine();
					addParent(newId, firstname, lastname, relationship, phone, email, address);
					
					break;
				case 4:
					System.out.println("\n=== Update Parent Information ===");
					System.out.println("Enter parent Id to update");
					int updateId = scanner.nextInt();
					scanner.nextLine();
					if(!parentExists(updateId)) {
						System.out.println("Parent with ID" + updateId + "does not exist");
						break;
					}

				
					System.out.println("Enter PhoneNUmber:");
					String newPhone= scanner.nextLine();
					
					System.out.println("Enter email:");
					String newEmail= scanner.nextLine();
					
					System.out.println("Enter address:");
					String newAddress= scanner.nextLine();
					updateParent(updateId, newPhone, newEmail, newAddress);
					break;
				case 5:
					System.out.println("Enter parent id to delete:");
					int deleteId = scanner.nextInt();
					scanner.nextLine();
					if(!parentExists(deleteId)){
						System.out.println("Parent with ID" + deleteId);
						break;
					}
					if(hasChildren(deleteId)) {
						System.out.println("This parent has children registered in the system");
						System.out.println("Deleting this parent will set their children's parent+id to NUll . Continue ?(y/n)");
					} else {
						System.out.println("are you sure you want to delete this parent ? (y/n):");
					}
					String confirm = scanner.nextLine();
					if(confirm.equalsIgnoreCase("y")) {
						deleteParent(deleteId);
					}
					break;
				case 6:
					System.out.println("Enter parent id:");
					int parentId = scanner.nextInt();
					scanner.nextLine();
					if (!parentExists(parentId)) {
						System.out.println("Parent with id"+ parentId +"does not exist.");
						break;
					}
					viewParentChildren(parentId);
					break;
				case 0:
					exit= true;
					System.out.println("Exiting application. Goodbye!");
					break;
				default:
					System.out.println("Invalid Choice:Please try again");
				}
			}

		} catch (SQLException ex) {
			System.out.println("Database error:" + ex.getMessage());
			ex.printStackTrace();
		} finally {
			if (connection != null) {

				try {
					connection.close();
					System.out.println("Database connection closed");
				} catch (Exception e) {
					System.out.println("Error closing the connection" + e.getMessage());
				}
			}
		}
		
	}
	private static void viewParentChildren(int parentId) throws SQLException{
		String sqlString = "SELECT s.student_id, s.first_name, s.last_name, c.class_name, " 
				+ "s.date_of_birth, s.gender "
				+ "FROM students s "
				+ "JOIN classes c on s.class_id = c.class_id "
				+ "WHERE s.parent_id =? "
				+ "ORDER BY s. student_id";
		try(PreparedStatement pstmt = connection.prepareStatement(sqlString)){
			pstmt.setInt(1, parentId);
			try(ResultSet rs= pstmt.executeQuery()){
				System.out.println("\n--- Children of Parent Id: " + parentId + "--");
				System.out.println("ID|Name|Date of birth| Gender | Class");
				System.out.println("---------------------------------------");
				
				boolean hasRecords = false;
				while (rs.next()) {
					hasRecords= true;
					int id = rs.getInt("student_id");
					String nameString = rs.getString("first_name") + " " + rs.getString("last_name");
					Date dobDate = rs.getDate("date_of_birth");
					String genderString = rs.getString("gender");
					String classNameString = rs.getString("class_name");
					System.out.println(id+ "|" + nameString + "|" + dobDate + "|" + genderString +"|" + classNameString);
					
				}
				if (!hasRecords) {
					System.out.println("This parent has no children registered in the system");
				}
			}
		}
	}
	private static void deleteParent(int deleteId) throws SQLException{
		connection.setAutoCommit(false);
		try {
			String updateChildrenSql = "Update students Set parent_id = Null Where parent_id = ? ";
			try(PreparedStatement pstmt= connection.prepareStatement(updateChildrenSql)){
				pstmt.setInt(1, deleteId);
				pstmt.executeUpdate();
			}
			String deleteParentSql = "Delete from parents where parent_id = ?";
			try(PreparedStatement pstmt = connection.prepareStatement(deleteParentSql)){
				pstmt.setInt(1, deleteId);
				int rowsDeleted = pstmt.executeUpdate();
				if(rowsDeleted>0) {
					System.out.println("Parent deleted successfully");
					connection.commit();
				} else {
					System.out.println("parent deletion failed");
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
	private static boolean hasChildren (int deleteId) throws SQLException {
		String sqlString = "SELECT 1 FROM students where parent_id = ? LIMIT 1";
		try(PreparedStatement pstmt = connection.prepareStatement(sqlString)){
			pstmt.setInt(1, deleteId);
			try(ResultSet rSet=pstmt.executeQuery()){
				return rSet.next();
			}
		} 
	}
	private static void getParentById(int id )throws SQLException{
		String sqString = "SELECT *FROM parents WHERE parent_id=?";
		try(PreparedStatement pstmt= connection.prepareStatement(sqString)){
			pstmt.setInt(1, id);
			try(ResultSet rs = pstmt.executeQuery()){
				if(rs.next()) {
					System.out.println("\n === Parent Detail ===");
					System.out.println("ID: "+ rs.getInt("parent_id"));
					System.out.println("Name: " + rs.getString("first_name") + " " + rs.getString("last_name"));
					System.out.println("Relationship:" +rs.getString("relationship"));
					System.out.println("Phone:" + rs.getString("phone_number"));
					System.out.println("Email:" + rs.getString("email"));
					System.out.println("Address:"+ rs.getString("address"));
				} else {
					System.out.println("No parent found with ID: "+ id);
				}
			}
		}
	}
	private static void updateParent(int updateId , String newPhone, String newEmail, String newAddress)throws SQLException{
		String sqlString ="Update parents SET phone_numbet = ? , email = ?, address = ?, WHERE parent_id = ?";
		try (PreparedStatement pstmt= connection.prepareStatement(sqlString)){
			pstmt.setString(1, newPhone);
			pstmt.setString(2, newEmail);
			pstmt.setString(3, newAddress);
			pstmt.setInt(4, updateId);
			
			int rowsUpdated = pstmt.executeUpdate();
			if (rowsUpdated>0) {
				System.out.println("Parent information updated successfully");
			}
		}
	}
	private static boolean parentExists (int updateId) throws SQLException{
		String sqlString= "SELECT 1 from parents WHERE parent_id=?";
		 try(PreparedStatement pstmt = connection.prepareStatement(sqlString)){
			 pstmt.setInt(1,updateId);
			 try(ResultSet rs = pstmt.executeQuery()){
				 return rs.next();
			 }
		 }
	}
	private static void addParent(int newId, String firstname, String lastname, String relationShip, String phone, String email, String address)throws SQLException {
		String sqlString ="INSERT INTO parents(parent_id, first_name, last_name, relationship, " + "phone_number,email, address) VALUES (?, ?, ?, ?, ?, ?, ?) ";
		try(PreparedStatement pStatement = connection.prepareStatement(sqlString)){
			pStatement.setInt(1, newId);
			pStatement.setString(2, firstname);
			pStatement.setString(3, lastname);
			pStatement.setString(4, relationShip);
			pStatement.setString(5, phone);
			pStatement.setString(6, email);
			
			pStatement.setString(7, address);
			
			int rowInserted = pStatement.executeUpdate();
			if(rowInserted>0) {
				System.out.println("Parent added successfullly ");
			}
		}
	}
	 private static void getAllParents() throws SQLException{
	    	String sqlString = "SELECT parent_id , first_name, last_name, relationship, phone_number FROM parents order by parents";
	    	try(Statement statement =connection.createStatement(); ResultSet rSet = statement.executeQuery(sqlString)){
	    		System.out.println("\n== All Parents ==");
	    		System.out.println("ID | Name | ReLation"
	    				+ "ship | Phone number");
	    		System.out.println("------------------"
	    				+ "---------------------");
	    		boolean hasRecords = false;
	    		while(rSet.next()) {
	    			hasRecords =  true;
	    			int id = rSet.getInt("parent_id");
	    			String nameString = rSet.getString("first_name") + " " + rSet.getString("last_name");
	    			String relationshipString = rSet.getString("relationship");
	    			String phoneString = rSet.getString("phone_number");
	    			System.out.println(id + "|" + nameString + "|" + relationshipString + "|" + phoneString);
	    		}
	    		if (!hasRecords) {
					System.out.println("No parents found");
				}
	    	}
	    	
	    	
	    	}
	    }


