package lesson_day_67;



public class AccessControl {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Test objTest = new Test();
		objTest.a=10;
		objTest.b=20;
		
		System.out.println(objTest.a);
		System.out.println(objTest.b);
		objTest.setC(100);
		System.out.println(objTest.getC());
		
		
		Father father = new Father("Father", 45);
		System.out.println(father.name);
		System.out.println(father.age);
		
		Child child =  new Child("Child", 10);
		System.out.println(child.name);
		System.out.println(child.age);

	}

}
class Father{
	String name;
	int age ;
	public Father(String name, int age) {
		// TODO Auto-generated constructor stub
		this.name=name;
		this.age= age;
	}
}
class Child extends Father{
	Child(String name, int age){
		super (name,age);
	}
}
class Test{
	int a;        //defualt access
	public int b; //public access buh gazraas access hj blno 
	private int c; //private access information hiding
	protected int d; //protected accee
	
	void setC(int i) {
		c=i;
	}
	int getC(){
		return c;
	}
}