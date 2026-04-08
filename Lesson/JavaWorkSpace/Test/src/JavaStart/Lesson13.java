package JavaStart;


//Polymorphism
class gameWeapon {
	void fire() {
		System.out.println("Weaping check");
	}
}
	
class Sword extends gameWeapon{
		@Override
		void fire() {
			System.out.println("Slashing");
		}
}		
class Bow extends gameWeapon{
		@Override
		void fire() {
			System.out.println("Arrowing");
		}
	}
	
class Gun extends gameWeapon{
		@Override
		void fire() {
			System.out.println("Shoting");
		}
	}



public class Lesson13 {
	
	public static void main(String[] args) {
		gameWeapon[] armory = {new Sword(), new Bow(), new Gun()};
		
		for (gameWeapon w : armory) {
			w.fire();
		}
	}
}
