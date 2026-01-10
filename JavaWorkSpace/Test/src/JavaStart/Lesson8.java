package JavaStart;

//OOP
class Human{
		String name;
		int age;
		
		void speak() {
			System.out.println("Hello my name is: ");
		}
		
		void speak2() {
			System.out.println("Nice to meet you: ");
		}
}





public class Lesson8 {
	public static void main(String[] args) {
		Human person1 = new Human();
		person1.name = "Tuvshin";
		person1.age = 26;
		
		
		Human person2 = new Human();
		person2.name = "Bilguun";
		person2.age = 22;
		
		person2.speak();
		System.out.println(person2.name + " i am " + person2.age +" years old !");
		
		
		person1.speak2();
		System.out.println(person1.name + " i am " + person1.age + " years old ");
		
		
		
		
	}
	
	
	

	
}



	
