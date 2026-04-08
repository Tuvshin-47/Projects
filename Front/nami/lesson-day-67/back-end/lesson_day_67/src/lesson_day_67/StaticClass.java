package lesson_day_67;

public class StaticClass {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		UseStatic.meth(42);
		System.out.println("Not using static");
		NotUsedStatic obj1 = new NotUsedStatic();
		obj1.meth(42);

	}

}
class NotUsedStatic {
	static int a=3;
	static int b;
	
 void meth(int x) {
		 System.out.println("x=" +x);
		 System.out.println("a=" +a);
		 System.out.println("b=" +b);
	 }
	
}
class UseStatic{
	static int a=3;
	static int b;
	
	 static void meth(int x) {
		 System.out.println("x=" +x);
		 System.out.println("a=" +a);
		 System.out.println("b=" +b);
	 }
	 static {
		 System.out.println("Statoc b;ick initialized");
		 b=a*4;
	 }
}
