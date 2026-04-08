package lesson_day_77;



abstract class BankAccount{
	protected String accountNumber;
    protected String ownerName;
    protected double balance;
    
    public BankAccount(String acc, String ownername, double balance) {
    	this.accountNumber = acc;
    	this.ownerName = ownername;
    	this.balance = balance;
	}
    
    public abstract void deposit(double amount);
    
    public abstract boolean withdraw(double amount);
    
    public double getBalance() {
    	return balance;
    }
    
    protected boolean hasEnoughFunds(double amount) {
    	return balance >= amount;
    	
    }
}

class SavingsAccount extends BankAccount{
	private double interestRate;
	public SavingsAccount(String acc, String ownername, double balance, double interestRate) {
		super(acc, ownername, balance);
		this.interestRate = interestRate;
	}
	
	double getInterest() {
		return interestRate;
	}
	
	@Override
	public void deposit(double amount) {
		if (amount > 0) {
			balance += amount + (amount * interestRate / 100);
		}
	}
	
	@Override
	
	public boolean withdraw(double amount) {
		if (amount > 0 && hasEnoughFunds(amount)) {
			balance -= amount;
			return true;
		}
		return false;
	}
}

class CheckingAccount extends BankAccount{
	private double overdraftLimit;
	public CheckingAccount(String acc, String ownername, double balance, double overdraftLimit) {
		super(acc, ownername, balance);
		this.overdraftLimit = overdraftLimit;
		
	}
	@Override
	public boolean withdraw(double amount) {
		if (amount > 0 && (balance + overdraftLimit) >= amount) {
			balance -= amount;
			return true;
		}
		return false;
	}
	@Override
	public void deposit(double amount) {
		balance += amount;
	}
	@Override
	protected boolean hasEnoughFunds(double amount) {
		return (balance + overdraftLimit) >= amount;
	}
}


public class BankDemo {
	public static void main(String[] args) {
		SavingsAccount savingsAccount = new SavingsAccount("SA00001", "Jane Doe ", 1000, 2.5);
		System.out.println("Created savings account for " + savingsAccount.ownerName + "with $" + savingsAccount.getBalance());
		double deposit = 500;
		savingsAccount.deposit(deposit);
		System.out.println("Deposited $" + deposit + " with " + savingsAccount.getInterest() + "% " + "interest. " + "New balance: " + savingsAccount.getBalance());
		double withdrawAmount = 200;
		boolean access = savingsAccount.withdraw(withdrawAmount);
		if (access) {
			System.out.println("Withdraw $" + withdrawAmount+". " + "New balance: $" + savingsAccount.getBalance());
		}
		
		double overdraftLimit = 100;
		CheckingAccount checkingAccount = new CheckingAccount("SA00002", "John Smith with $", 500, overdraftLimit);
		System.out.println("Created checking account for " + checkingAccount.ownerName + "with $" + checkingAccount.getBalance() + " and $" + overdraftLimit + " overdraft");
		
		double deposit2 = 300;
		checkingAccount.deposit(deposit2);
		System.out.println("Deposited $" + deposit2 +". " + "New balance: $" + checkingAccount.getBalance());
		
		double withdrawAmount2 = 850;
		boolean withDrawSuccess = checkingAccount.withdraw(withdrawAmount2);
		if(withDrawSuccess) {
			System.out.println("Withdraw $" + withdrawAmount2 +". " + "New balance: $" + checkingAccount.getBalance());
		}
		double withDrawAmount3 = 100;
		boolean withDrawSuccess3 = checkingAccount.withdraw(withDrawAmount3);
		if (withDrawSuccess3) {
			System.out.println("WithDraw $" + withDrawAmount3 + ". New balance : $" + checkingAccount.getBalance());
		}else {
			System.out.println("Attempted withdraw $" + withDrawAmount3 + ". Insufficient funds.");
		}
		
	}
}
