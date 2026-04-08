package lesson_day_76;

public class Overload {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Son sonn = new Son(10, 20, 30);
		sonn.show();
		sonn.show("HI :");
	}

}
class Father {
	int i, j;
	
	Father (int a , int b ){
		i=a;
		j=b;
	}
	void show () {
		System.out.println("i and j " +i+ " " +j);
	}
}

class Son extends Father{
	int k;
	Son(int a, int b , int c){
		super(a, b);
		k=c;
	}
	//overload
	void show (String msg) {

		System.out.println(msg+k);
	}
}
