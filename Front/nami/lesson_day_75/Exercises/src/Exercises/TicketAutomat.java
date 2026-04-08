package Exercises;



public class TicketAutomat {
	//properties
	private int price=1;
	private int balance =0 ;
	int total =0 ;
	private int ticketId= 0;
	

	//constructor
 public TicketAutomat(int cost) {
	 price=cost;
 }
//getters
 public int getPrice() {
	 return price ;
 }

 public int getBalance() {
	 return balance;
 }
 public void getTotal() {
	 System.out.println("Total sold amount cent :"+total);

 }
 //setters
 public void insertMoney(int amount) {
	 balance = amount;
	 System.out.println("your inserted money is now :" + balance);
 }
 //custom methods

 public void printTicket() {
	 for (int i = 0; i < balance/price; i++) {
		System.out.println();
		System.out.println("###################");
		System.out.println("# The Ticket Line #");
		System.out.println("# Ticket ID :" + ++ticketId+"    #");
		System.out.println("# " + price +"cents.       #");
		System.out.println("###################");
	}
	 total += balance;
	 balance = 0;
 }

public static void main(String[] args) {
	TicketAutomat tAutomat = new TicketAutomat(100);
	System.out.println(tAutomat.getPrice());
	System.out.println(tAutomat.getBalance());
	tAutomat.insertMoney(500);
	tAutomat.printTicket();
	tAutomat.getTotal();
}
}