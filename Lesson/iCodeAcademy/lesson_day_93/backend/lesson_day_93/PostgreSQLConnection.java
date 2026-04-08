package lesson_day_93;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class PostgreSQLConnection {
	public static void main(String[] args) {
		String urlString = "jdbc:postgresql://localhost:5433/school_management_system";
		String userString = "postgres";
		String passwordString = "postgres";
		
		Connection connection = null;
		try {
			connection = DriverManager.getConnection(urlString, userString, passwordString);
			System.out.println("Connected Successfully to PostgreSQL!");
			// fetch students
			
			Statement statement = connection.createStatement();
			ResultSet resultSet = statement.executeQuery("SELECT * FROM students");
			System.out.println("\n Student List:");
			System.out.println("ID | First NAME | Last NAME | Class");
			System.out.println("------------------------------------");
			while (resultSet.next()) {
				int id = resultSet.getInt("student_id");
				String fString = resultSet.getString("first_name");
				String lString = resultSet.getString("last_name");
				int classId = resultSet.getInt("class_id");
				System.out.println(id + " | " + fString + " | " + lString + " | " + classId);
			}
//			clean up resources
			resultSet.close();
			statement.close();
		} catch (SQLException e) {
			System.out.println("Database connection error : " + e.getMessage());
			e.printStackTrace();
		} finally {
			// always close the connection when done
			if (connection != null) {
				try {
					connection.close();
					System.out.println("\nDatabase connection closed!");
				} catch (SQLException e) {
					System.out.println("Error closing connection: " + e.getMessage());
				}
			}
		}
	}
}