package lesson_day_68;

public class Outer {
	int outerX= 100;
	
	void showy() {
		Inner inner = new Inner();
		inner.showY();
	}
	
	void test () {
		Inner inner= new Inner();
		inner.display();
	}
	
	class Inner {
		int y=10;
		void showY() {
			System.out.println(y);
		}
		
		void display() {
			System.out.println("display: outerX=" +outerX);
		}
	}
	
}
