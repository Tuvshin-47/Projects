package ItpecProblems;


public class java2 {

	public static void main(String[] args) {
		
		
		int carPrice = 50000;
		int mySavings = 60000;
		boolean hasLicense = false;
		
		
		
		//AND gate
		if (mySavings >= carPrice && hasLicense) {
			System.out.println("You can buy car and enjoy");
		}else {
			System.out.println("You need something");
		}
		
		
		//OR gate 
		boolean isSale = false;
		if (isSale || mySavings > 50000) {
			System.out.println("Buy car first!!");
		}else {
			System.out.println("Maybe next time");
		}
	}
}
