package lesson_day_76;

public class Dispatch {
	public static void main(String[] args) {
		DispatchA  a= new DispatchA();	
		DispatchB  b= new DispatchB();	
		DispatchC  c= new DispatchC();	
		a.callMe();
		b.callMe();
		c.callMe();
		
		DispatchA rA;
		rA=a; //a luu reference
		rA.callMe();
		
		rA=b; //b luu reference
		rA.callMe();

		rA=c; //c luu reference
		rA.callMe();
	}
}
class DispatchA{
	void callMe() {
		System.out.println("Inside a A's call me method");
	}
}
class DispatchB extends DispatchA{
	void callMe() {
		System.out.println("Inside a B's call me method");
	}
}
class DispatchC extends DispatchB{
	void callMe() {
		System.out.println("Inside a C's call me method");
	}
}