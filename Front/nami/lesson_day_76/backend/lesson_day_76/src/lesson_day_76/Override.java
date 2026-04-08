package lesson_day_76;

public class Override {

	public static void main(String[] args) {
		BO bo = new BO(10, 20, 30);
		bo.show();
	}

}

class AO {
	int i, j;

	AO(int a, int b) {
		i = a;
		j = b;
	}

	void show() {
		System.out.println("i and j" + i + " " + j);
	}
}

class BO extends AO {
	int k;

	BO(int a, int b, int c) {
		super(a, b);
		k = c;
	}
	//override
	void show () {
		super.show();
		System.out.println("k:" +k);
	}
}