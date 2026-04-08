package lesson_day_78;

abstract class Employee {

	public static void main(String[] args) {
		Manager manager= new Manager("Alice Johnson", "E001",5000,2000);
		System.out.println("Manager:" + manager.getEmployeeInfo());
		System.out.println("Base salary:" + manager.getBaseSalary());
		System.out.println("Bonus:" + manager.getBonus());
		System.out.println("Total salary:" + manager.calculateSalary());
		System.out.println();
		Developer developer = new Developer("Bob Smith", "E002", 4000, 10, 3);
		System.out.println("Developer:" + developer.getEmployeeInfo());
		System.out.println("Base salary:" + developer.getBaseSalary());
		developer.printOvertime();
		System.out.println("Total salary:" + developer.calculateSalary());
		}
		public double getOvertime(double overtimeHours, double hourlyRate) {
		// TODO Auto-generated method stub
		return 0;
	}
		public double getOvertime() {
		// TODO Auto-generated method stub
		return 0;
	}
		protected  String name;
		protected String id;
		protected double baseSalary;
		
		public Employee(String name, String id, double baseSalary) {
			this.name=name;
			this.id=id;
			this.baseSalary=baseSalary;
		}
		public double getBaseSalary() {
			return baseSalary;
		}
		
		public abstract double calculateSalary() ;
		public String getEmployeeInfo() {
			return this.name+ "(" +this.id +")";
		}
}

class Manager extends Employee{
	private double bonus;
	public Manager(String name, String id, double baseSalary, double bonus) {
		super(name, id, baseSalary);
		this.bonus=bonus;
	}
	@Override 
	public double calculateSalary() {
		return baseSalary+bonus;
	}
	public double getBonus () {
		return this.bonus;
	}
}
class Developer extends Employee{
	private double overtimeHours ;
	private double hourlyRate;
	public Developer (String name, String id, double baseSalary, double overtimeHours, double hourlyRate) {
		super(name, id, baseSalary);
		this.overtimeHours= overtimeHours;
		this.hourlyRate=hourlyRate;
	}
	
	 void printOvertime() {

      System.out.println("Overtime:"+ overtimeHours +" hours at " +"$"+overtimeHours*hourlyRate+"0/hour");
	}
	public double calculateSalary() {
		return baseSalary+(overtimeHours*hourlyRate);
	}
}
class Salesperson extends Employee{
	private double commissionRate ;
	private double salesAmount;
	public Salesperson (String name, String id, double baseSalary, double comissionRate, double salesAmount) {
		super(name, id, baseSalary);
		this.commissionRate=comissionRate;
		this.salesAmount=salesAmount;
	}
	
	
}