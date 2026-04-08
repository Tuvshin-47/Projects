package Exercises;

import java.util.Arrays;

public class SumCalculator {

	static int calculateSum(int[] numbers) {
		int sum =0;
		//sum logic
		for (int number : numbers) {
			sum+= number;
		}
		return sum;
	}; 
	public static void main(String[] args) {
		int[] inputNumbers = {1,2,3,4,5};
		System.out.println("Input :"+Arrays.toString(inputNumbers));
		System.out.println("Output :"+calculateSum(inputNumbers));
		System.out.println();
		int[] inputNumbers2 = {10,20,30,40};
		System.out.println("Input :"+Arrays.toString(inputNumbers2));
		System.out.println("Output2:" +calculateSum(inputNumbers2));
	}}
