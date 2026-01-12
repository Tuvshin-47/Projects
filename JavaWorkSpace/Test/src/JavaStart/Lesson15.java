package JavaStart;
class allWeapon{
	String name;
	static int totalWeapons = 0;
	
	allWeapon(String name){
		this.name = name;
		totalWeapons++;
	}
	
	static void displayTotal() {
		System.out.println("Total created Weapons : " + totalWeapons);
	}
}

public class Lesson15 {

	public static void main(String[] args) {
		allWeapon w1 = new allWeapon("Сэлэм");
        allWeapon w2 = new allWeapon("Нум");
        allWeapon w3 = new allWeapon("Буу");
        
        allWeapon.displayTotal();
	}
}
