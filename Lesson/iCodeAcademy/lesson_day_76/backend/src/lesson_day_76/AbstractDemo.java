package lesson_day_76;

public class AbstractDemo {
	public static void main(String[] args) {
		Dove dove = new Dove();
		dove.makeTweet();
		dove.callMeToo();
		
		RubberDuck rubberDuck = new RubberDuck();
		rubberDuck.makeTweet();
		rubberDuck.callMeToo();
	}
}


abstract class Bird {
	 abstract void makeTweet();
	 
//	 abstract class concrete method
	 void callMeToo() {
		 System.out.println("This is a concrete method.");
	 }
}

class Dove extends Bird {
	void makeTweet() {
		System.out.println("Grururur");
	}
}

class RubberDuck extends Bird {
	void makeTweet() {
		System.out.println("Waug Waug");
	}
}