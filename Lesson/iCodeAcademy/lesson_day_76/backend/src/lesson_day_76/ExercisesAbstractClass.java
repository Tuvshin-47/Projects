package lesson_day_76;

public class ExercisesAbstractClass {

	public static void main(String[] args) {
		ARectangle r = new ARectangle(9, 5);
		ATriangle t = new ATriangle(10, 8);
		AFigure figref;
		figref = r;
		System.out.println("Area is " + figref.area());
		figref = t;
		System.out.println("Area is " + figref.area());
	}
}

// AFigure гэдэг abstract class үүсгээд түүндээ dim1, dim2 гэдэг instance variable үүсгээрэй.
// constructor-ийг дээрх утгуудыг гаднаас авч өөрчилдөг болгоорой.
// одоо area гэдэг функцийг implement хийхгүйгээр үүсгээрэй.

// ATriangle гэдэг класс үүсгээд түүнийг AFigure-ээс уламжилдаг болгоорой. area функцыг implement 
// хийгээрэй.

// ASquare гэдэг класс үүсгээд түүнийг AFigure-ээс уламжилдаг болгоорой. area функцыг implement 
//хийгээрэй.

//Using abstract methods and classes.
abstract class AFigure {
	double dim1;
	double dim2;

	AFigure(double a, double b) {
		dim1 = a;
		dim2 = b;
	}

//area is now an abstract method
	abstract double area();
}

class ARectangle extends AFigure {
	ARectangle(double a, double b) {
		super(a, b);
	}

//override area for rectangle
	double area() {
		System.out.println("Inside Area for Rectangle.");
		return dim1 * dim2;
	}
}

class ATriangle extends AFigure {
	ATriangle(double a, double b) {
		super(a, b);
	}

//override area for right triangle
	double area() {
		System.out.println("Inside Area for Triangle.");
		return dim1 * dim2 / 2;
	}
}