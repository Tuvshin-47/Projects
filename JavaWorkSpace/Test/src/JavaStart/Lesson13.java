package JavaStart;


//Polymorphism
class Weapon {
	void fire() {
		System.out.println("Weaping check");
	}
}
	
class Sword extends Weapon{
		@Override
		void fire() {
			System.out.println("Slashing");
		}
}		
class Bow extends Weapon{
		@Override
		void fire() {
			System.out.println("Arrowing");
		}
	}
	
class Gun extends Weapon{
		@Override
		void fire() {
			System.out.println("Shoting");
		}
	}



public class Lesson13 {
	
	public static void main(String[] args) {
		Weapon[] armory = {new Sword(), new Bow(), new Sword()};
		
		for (Weapon w : armory) {
			w.fire();
		}
	}
}
