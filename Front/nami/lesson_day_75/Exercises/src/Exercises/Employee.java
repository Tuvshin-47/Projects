package Exercises;

public class Employee {
	String name;
	String id;
	public Employee(String name, String id) {
		this.name=name;
		this.id=id;
	}
	public double calculateSalary() {
		return 0.0;
	}
	public String getName(){
		return this.name;
	}
	public String getId(){
		return this.id;
	}
	
	
	
}
class FullTimeEmployee extends Employee{
	private double salary;
	public FullTimeEmployee (String name, String id, double salary) {
		super(name, id);                                                                                            
		this.salary = salary;
	}
	@Override
	public double calculateSalary() {
		return salary;
	}
}
class PartTimeEmployee extends Employee {
	double hourlyRate;
	double hoursWorked;
	
	public PartTimeEmployee(String name, String id, double hourlyRate,double hoursWorked) {
		super(name, id);
		this.hourlyRate=hourlyRate;
		this.hoursWorked=hoursWorked;
	}
	public double calculateSalary() {
		return hourlyRate*hoursWorked;
	}
}

