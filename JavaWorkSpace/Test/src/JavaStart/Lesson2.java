package JavaStart;

import java.util.Scanner;

public class Lesson2 {

	
	
	public static void main(String[] args) {
		Scanner obj = new Scanner(System.in);
		System.out.println("What is you Name: ");
		
		String username = obj.nextLine();
		System.out.println("Hi: " + username);
	}
}
