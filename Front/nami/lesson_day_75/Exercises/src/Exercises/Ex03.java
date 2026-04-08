package Exercises;

import java.io.ObjectInputStream.GetField;

public class Ex03 {
	public static void main(String[] args) {
		BankAccount account1= new BankAccount("12345678", "Nobody", 1700);
		account1.deposit(500);
		System.out.println("Current balance"+" "+ account1.getBalance ());
		account1.withdraw(200);
		System.out.println("Current balance"+" "+ account1.getBalance ());
	}
}


