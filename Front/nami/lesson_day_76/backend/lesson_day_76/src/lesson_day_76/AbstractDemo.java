package lesson_day_76;

public class AbstractDemo {

	public static void main(String[] args) {
		Dove dove = new Dove();
		dove.makeTweet();
		dove.callMetoo();
		
		RubberDuck rubberDuck = new RubberDuck();
		rubberDuck.makeTweet();
		rubberDuck.callMetoo();
	}

	}
abstract class Bird {
	abstract void makeTweet();
	
	void callMetoo() {
		System.out.println("This is a concrete method");
	}
	
}
class Dove extends Bird {
	void makeTweet() {
		System.out.println("Grurururu");
	}
}
class RubberDuck extends Bird {
	void makeTweet() {
		System.out.println("Waung waung");
	}
}

