package Exercises;

public class Ex02 {
	public static void main(String[] args) {
		User user1 = new User("Bat Dorj", "bat@example@yahoo.com", 25);
		System.out.println(user1.getName()+"  "  +  user1.getEmail() +"  "  + user1.getAge());
		user1.setAge(26);
		System.out.println("Updated Age:" +user1.getAge());
	}
}
