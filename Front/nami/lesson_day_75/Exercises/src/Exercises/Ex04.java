package Exercises;

public class Ex04 {
	public static void main(String[] args) {

	        Circle circle1 = new Circle(3);
	        System.out.println( "Circle Area: " + circle1.calculateArea()); 
	        System.out.println("Circle Perimeter: " + circle1.calculatePerimeter());
	        
	        Rectangle rec1 = new Rectangle(4, 5);
	        System.out.println("Rectangle Area: " + rec1.calculateArea());
	        System.out.println("Rectangle Perimeter: " + rec1.calculatePerimeter());
	    }

}
