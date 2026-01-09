package ItpecProblems;


public class Ticket {
	
	public int ticketPrice(int age, boolean member) {

	if ((age <= 10) || (age >=60)) {
		return 10;
	}else {
		return 20;
	}
	
}
	
	
	
	
	
	
	public static void main(String[] args) {
	      	Ticket ticket = new Ticket();
	        System.out.println("Price for : " + ticket.ticketPrice(8, false) + "$");
	        System.out.println("Price for : "  + ticket.ticketPrice(65, true) + "$");
	        System.out.println("Price for : "  + ticket.ticketPrice(30, false) + "$");
		
	}

}
