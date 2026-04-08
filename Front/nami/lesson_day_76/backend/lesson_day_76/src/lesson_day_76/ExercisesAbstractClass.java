package lesson_day_76;

public class ExercisesAbstractClass {
	public static void main(String[] args) {
		ATriangle triangle = new ATriangle();
		triangle.AREAa();
	}
}
abstract class AFigure {
	abstract void AREAa();
	double dim1;
	double dim2;
	AFigure( double a , double b) {
		dim1=a;
		dim2=b;
	}
	double area() {
		System.out.println("Area for a Figure is undefined");
		return 0; 
	}
	
}
class ATriangle extends AFigure{
	public ATriangle(int a, int b) {
		super(a, b);
	}
	double area() {
		System.out.println("this is Triangle" + dim1 * dim2 / 2);
	}
}
