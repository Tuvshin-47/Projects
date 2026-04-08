package LD85;
import java.util.ArrayList;
import java.util.List;

public class Array {

	public static void main(String[] args) {
		  ArrayList<String> cars = new ArrayList<String>();
		    cars.add("1");
		    cars.add("5");
		    cars.add("76");
		    cars.add("42");
		    
		    ArrayList cars2 = (ArrayList)cars.clone();
		    cars2.set(0, "36");
		    
		    System.out.println(cars);
		    System.out.println(cars2);
		
	}

}
