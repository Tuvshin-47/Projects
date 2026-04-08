package Exercises;

public class Ex05 {
	public static void main(String[] args) {
		FullTimeEmployee employee1 = new FullTimeEmployee("Batdorj", "F001", 3000);
		System.out.println(employee1.getName()+ "'s salary "+employee1.calculateSalary());
		
		PartTimeEmployee employee2 =  new PartTimeEmployee("BoldBAT","F002", 4, 300);
		System.out.println(employee2.getName()+ "'s salary "+employee2.calculateSalary());
		
	}
}
