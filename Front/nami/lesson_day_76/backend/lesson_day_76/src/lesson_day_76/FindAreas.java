package lesson_day_76;

public class FindAreas {

	public static void main(String[] args) {
		Rectangle rectangle = new Rectangle(20, 10);
		rectangle.area();

	}

}
class Figure {
	double dim1;
	double dim2;
	
	Figure(double a, double b) {
		dim1=a;
		dim2=b;
	}
	double area() {
		System.out.println("Area for a Figure is undefined");
		return 0;
	}
}
class Rectangle extends Figure{

	 Rectangle(double a, double b) {
		 super(a, b);

	
	}
	 double area(){
		 super.area();
		 System.out.println("Inside Area for Rectangle :"+ dim1 *  dim2);
		 return ( dim1 *  dim2);

	 }
}
class Triangle extends Rectangle{
	
}