package JavaStart;

import java.util.Iterator;
import java.util.Scanner;

public class Lesson5 {

	public static void main(String[] args) {
		
		Scanner input = new Scanner(System.in);
		System.out.println("Give me the Number I print your Name ");
	    int num = input.nextInt();
		
		 if (num >= 2) {
			 for (int i = 1; i <= num; i++) {
					System.out.println(i +  "-р удаа: Сайн уу Tuvshin");
				}

		}else{
			System.out.println("More High Number !!!");
		
		}
		
		
	}

}
