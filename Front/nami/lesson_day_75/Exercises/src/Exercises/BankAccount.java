package Exercises;

public class BankAccount {
	private String accountNumber;
	private String ownerName;
	private double balance;

	public BankAccount(String accountNumber, String ownerName, double balance) {
		this.accountNumber=accountNumber;
		this.ownerName=ownerName;
		this.balance= balance;
	}
	public double getBalance() {
		return this.balance= balance;
	}
	public void  deposit(double amount) {
		if(amount>0) {
			balance+= amount;
			System.out.println(amount + " deposited successfully");
		} else {
			System.out.println("Invalid deposit amount");
		}
		
	} 
	public void withdraw(double amount) {
		if(amount>0 && amount <= balance) {
			balance-= amount;
			System.out.println(amount + " withdrawn successfully");
		} else if (amount<balance) {
			System.out.println("Insufficient funds. Current balance:"+ balance);
		} else {
			System.out.println("Invalid withdrawn amount");
		}

	}
}
