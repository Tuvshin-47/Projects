package lesson_day_67;


public class GarbageCollector {

	public static void main(String[] args) {
		
		Person tuguldur = new Person("Tuguldur", 30); // new object creation
		Person tuvshin = new Person("TUvshin", 23); // new object creation
		System.out.println(tuguldur.name); // reference to tuguldur object
		System.out.println(tuvshin.name); // same here
//		
		// delete tuguldur here
		// delete tuvshin here
		
	}

}


class Person {
	String name;
	int age;
	
//	Constructor
	public Person(String name, int age) {
		this.name = name;
		this.age = age;
	}
	
}