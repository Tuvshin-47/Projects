package bituun;

public class ReturnObject {
	public static void main(String[] args) {
		Test obj1 = new Test(2);
		Test obj2;
		obj2 = obj1.incrementByTen();
		System.out.println("obj1.a"+obj1.a);
		System.out.println("obj2.a"+obj2.a);
		obj2 = obj2.incrementByTen();
		System.out.println("obj2.a after sevond increase "+obj2.a);
	}
	
	
}
