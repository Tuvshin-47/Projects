package lesson_day_67;

public class StaticClass {

	public static void main(String[] args) {
		UseStatic.meth(42);
//		NotUsedStatic.meth(42);
		System.out.println("Not using static method");
		NotUsedStatic obj1 = new NotUsedStatic();
		obj1.meth(42);
	}
}

class NotUsedStatic {
	int a = 3;
	int b; // 0
	
	void meth(int x) {
		System.out.println("x = " + x); // 42
		System.out.println("a = " + a); // 3
		System.out.println("b = " + b); // 0
	}
}

class UseStatic {
	static int a = 3;
	static int b;
	
	static void meth(int x) {
		System.out.println("x = " + x);
		System.out.println("a = " + a);
		System.out.println("b = " + b);
	}
	
	static {
		System.out.println("Static block initialized");
		b = a * 4;
	}
}
