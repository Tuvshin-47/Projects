package lesson_day_67;

public class GarbageCollector {
	public static void main(String[] args) {
		Person tuguldur= new Person("Tuguldur", 30); //new object creatipm
		Person tuvshin= new Person("Tuvshin", 26);
		System.out.println(tuguldur.name); //reference to tuguldur obj
		System.out.println(tuvshin.name);
		
		
		//delete tuguldur here
	}
}

class Person {
	String name;
	int age;
	public Person(String name, int age) {
		this.name=name;
		this.age=age;
	}
}