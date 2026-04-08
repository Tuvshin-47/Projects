package lesson_day_76;

public class FindAreas {

	public static void main(String[] args) {
		Figure f = new Figure(10, 10);
		Rectangle r = new Rectangle(9, 5);
		Triangle t = new Triangle(10, 8);
		Figure figref;
		figref = r;
		System.out.println("Area is " + figref.area());
		figref = t;
		System.out.println("Area is " + figref.area());
		figref = f;
		System.out.println("Area is " + figref.area());
	}

}

class Figure {
	double dim1;
	double dim2;

	Figure(double a, double b) {
		dim1 = a;
		dim2 = b;
	}

	double area() {
		System.out.println("Area for a Figure is undefined");
		return 0;
	}
}

class Rectangle extends Figure {
	Rectangle(double a, double b) {
		super(a, b);
	}

// override area for rectangle
	double area() {
		System.out.println("Inside Area for Rectangle.");
		return dim1 * dim2;
	}
}

class Triangle extends Figure {
	Triangle(double a, double b) {
		super(a, b);
	}

// override area for right triangle
	double area() {
		System.out.println("Inside Area for Triangle.");
		return dim1 * dim2 / 2;
	}

}

// Rectangle гэдэг класс үүсгээд түүнийгээ Figure гэдгээс уламжилж авдаг болгоорой.
// тэгээд area method-ийг Inside Area for Rectangle гэж хэвлээд тэгш өнцөгтийн талбайг нь олоод 
// буцаадаг болгоорой. Конструкторыг нь бас уламжилж байгаа классаасаа авч ашиглаарай.

// Triangle гэдэг класс үүсгээд түүнийгээ бас Figure гэдгээс уламжилж авдаг болгоорой.
// тэгээд area method-ийг Inside Area for Triangle гэж хэвлэдэг болгоод дараа нь triangle -ийн талбайг
//  олдог болгоод буцаагаарай. Конструкторыг нь уламжилж байгаа классаасаа авч ашиглаарай.

// Test Cases
// Figure-ийг нь 10, 10 утгаар бодоорой.
// Rectangle нь 9, 5 байхаар бодоорой.
// Triangle нь 10, 8 байхаар бодоорой.
// Inside Area for Rectangle.
//Area is 45
//Inside Area for Triangle.
//Area is 40
//Area for Figure is undefined.
//Area is 0
