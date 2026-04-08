package lesson_day_78;

abstract class Shape {
	public static void main(String[] args) {
		
	}
	public abstract double calculateArea();
	
	public abstract double calculatePerimeter();

}

class Circle extends Shape {
	private double radius;
	
	@Override
	public double calculateArea() {
		return Math.PI * radius *radius;
	}
	@Override
	public double calculatePerimeter() {
		return 2 * Math.PI * radius;
	}
}
class Rectangle extends Shape {
	private double length;
	private double width;
	public Rectangle (double a, double b) {
		length=a;
		width=b;
	}
	
	@Override
	public double calculateArea() {
		return length*width;
	}

	@Override
	public double calculatePerimeter() {
		return 2*(length+width);
	}
	
}
class Triangle extends Shape {
	private double a;
	private double b;
	private double c;

	@Override
	public double calculateArea() {
		
		return a+b+c;
	}

	@Override
	public double calculatePerimeter() {
		double s = calculatePerimeter()/2;
		return Math.sqrt(a*(s-a)*(s-b)*(s-c));
	}
	
}
