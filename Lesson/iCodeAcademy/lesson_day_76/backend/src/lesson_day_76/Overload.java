package lesson_day_76;

public class Overload {

	public static void main(String[] args) {
		Son son = new Son(1, 3, 4);
		son.show();
		son.show("Hi : ");
	}
}

class Father {
	int i, j;

	Father(int a, int b) {
		i = a;
		j = b;
	}

	void show() {
		System.out.println("i and j : " + i + "  " + j);
	}
}

class Son extends Father {
	int k;

	Son(int a, int b, int c) {
		super(a, b);
		k = c;
	}
//	overload
	void show(String msg) {
		System.out.println(msg + k);
	}

}