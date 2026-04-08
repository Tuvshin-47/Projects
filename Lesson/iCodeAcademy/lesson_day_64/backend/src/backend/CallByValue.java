package backend;

public class CallByValue {
	public static void main(String[] args) {
		System.out.println("Hello World");
		Test test = new Test();
		int a = 5, b= 20;
		System.out.println("a and b before call: " + a + " " + b);
		test.meth(a, b);
		System.out.println("a and b after call: " + a + " " + b);
	}
}
