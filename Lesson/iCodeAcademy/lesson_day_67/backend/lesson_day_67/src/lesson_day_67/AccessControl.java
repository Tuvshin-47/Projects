package lesson_day_67;

public class AccessControl {

	public static void main(String[] args) {
		Test objTest = new Test();
		objTest.a = 10;
		objTest.b = 20;
		
		//objTest.c = 100; // private access
		System.out.println(objTest.a);
		System.out.println(objTest.b);
		objTest.setC(100);
		System.out.println(objTest.getC());
		
//		print 100 from
		Father father = new Father("Father", 45);
		System.out.println(father.name);
		System.out.println(father.age);
		
		Child child = new Child("Child", 10);
		System.out.println(child.name);
		System.out.println(child.age);	
	}
}

// inheritance
class Father {
	String name;
	int age;
	Father(String name, int age){
		this.name = name;
		this.age = age;
	}
}

class Child extends Father {
	Child(String name, int age) {
		super(name, age);
	}
	
}

class Test {
	int a; // default access
	public int b; // public access
	private int c; // private access information hiding
	protected int d; // protected access
	
	// methods to access c
	void setC(int i) {
		c = i;
	}
	
	// get value of c
	int getC() {
		return c;
	}
}