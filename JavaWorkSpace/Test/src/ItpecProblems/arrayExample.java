package ItpecProblems;

import java.util.Iterator;
import java.util.concurrent.ForkJoinPool;

public class arrayExample {

//	public static void main(String[] args) {
//		int[] prices = {1000, 2000, 3000, 4000, 5000};
//		
//		System.out.println("Array lenght is : " + prices.length);
//		
//		for (int i = 0; i < prices.length; i++) {
//			System.out.println("Index " + i + " - дахь машины үнэ: $" + prices[i]);
//		}
//	}
	
	
	//Array if else
	
//	public static void main(String[] args) {
//		int[] ages = {12, 44, 55, 21, 25, 51, 32, 35};
//		
//		System.out.println("total element in array : " + ages.length);
//		
//		int i = 0;
//		
//		while (i < ages.length) {
//			if (ages[i] > 18) {
//				System.out.println(ages[i]);
//			}
//			i++;
//		}
//	}
	
	
	
	//Array sort
	public static void main(String[] args) {
		
		int[] ages = {12, 44, 55, 21, 25, 51, 32, 35};
		int n = ages.length;
		
		for (int i = 0; i < n - 1; i++) {
			for (int j = 0; j < n - i - 1; j++) {
				if (ages[j] > ages[i]) {
					int temp = ages[j];
					ages[j] = ages[j + 1];
					ages[j + 1] = temp; 
				}
				
			}
		}
		
		System.out.println("Sorted Ages");
		for (int age: ages) {
			System.out.print(age + " ");
			
		}
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
