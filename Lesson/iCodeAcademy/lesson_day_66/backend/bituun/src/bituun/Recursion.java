package bituun;

public class Recursion {

	public static void main(String[] args) {
//		Create new Factorial object
		Factorial factorial = new Factorial();
		// test factorial with 3, 5, 6
		
		System.out.println(factorial.fact(3));
		
		System.out.println(factorial.fact(5));
		
		System.out.println(factorial.fact(6));
		
		
		
//		RecTest class тест бичих
		RecTest objRecTest = new RecTest(10);
	
		
		for (int k = 0; k < 10;k++) {
			objRecTest.values[k] = k;
		}
		
		objRecTest.printArray(10);
		
		
	}

}
