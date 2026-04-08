package lesson_day_68;

public class Outer {
	int outerX = 100;
	
	void test() {
		Inner inner = new Inner();
		inner.display();
	}
	
//	Inner class-д y = 10 гэсэн property, instance variable үүсгэнэ үү
	// outer class-д шинээр showy гэдэг утга буцаадаггүй функц үүсгээд
	// inner class-ийн y--ийн утгыг хэвлэх гэж үзнэ үү
	class Inner {
		int y = 10;
		void display() {
			System.out.println("display: outerX = " + outerX);
		}
		void showY() {
			System.out.println(y);
		}
	}
	
	void showy() {
		Inner inner = new Inner();
		inner.showY();
	}
	
}
