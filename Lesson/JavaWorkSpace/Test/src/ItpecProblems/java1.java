package ItpecProblems;

import java.util.Scanner;

public class java1 {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        
        System.out.print("Enter Car Price: ");
        int carPrice = scan.nextInt(); 
        
        System.out.print("Enter your monthly savings: ");
        int monthlySave = scan.nextInt();
        
        int totalSavings = 0;
        int monthCounter = 0; 
        
        
        while (totalSavings < carPrice) {
            totalSavings = totalSavings + monthlySave;
            monthCounter++;
            
            System.out.println("Month " + monthCounter + ": Current savings is $" + totalSavings);
        }
        
        System.out.println("---------------------------------------");
        System.out.println("Goal reached! Total months needed: " + monthCounter);
        System.out.println("Final savings: $" + totalSavings);
        
        scan.close();
    }
}