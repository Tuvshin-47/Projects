package lesson_day_76;

public class CallingConstructor {
	public static void main(String[] args) {
		C c = new C();
	}
}


class A {
	A(){
		System.out.println("Inside A's contructor.");
	}
}

class B extends A{
	B(){
		System.out.println("Inside B's contructor.");
	}
}

class C extends B {
	C(){
		System.out.println("Inside C's contructor.");
	}
}