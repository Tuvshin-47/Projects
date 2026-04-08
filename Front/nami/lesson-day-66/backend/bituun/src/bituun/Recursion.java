package bituun;

public class Recursion {
	public static void main(String[] args) {
		Factorial factorial= new Factorial();
		System.out.println(factorial.fact(3));
		System.out.println(factorial.fact(5));
		System.out.println(factorial.fact(6));
		
		
		RecTest objRecTest = new RecTest(10);
		int i;
		for (int n= 0; n<10; n++) {
			objRecTest.values[n]=n;
		}
		objRecTest.printArray(10);
	}

}
