package JavaStart;


enum Rarity{
	COMMON,
	RARE,
	LEGENDARY
}

 class Weapon{
	String name;
	Rarity rarity;
	
	Weapon(String name, Rarity rarity){
		this.name = name;
		this.rarity = rarity;
	}
	
	void displayInfo() {
		System.out.print(name + "- Type " + rarity + "--");
		
		switch (this.rarity) {
        case LEGENDARY:
            System.out.println("THIS ITEM IS LEGEND!");
            break;
        case COMMON:
            System.out.println("Normal Weapon.");
            break;
        case RARE:
            System.out.println("Rare find!");
            break;
        default:
            System.out.println("Unexpected value.");
            break;
    }
	}
}



public class Lesson14 {


	public static void main(String[] args) {
		Weapon mySword = new Weapon("Ecvalibur", Rarity.LEGENDARY);
		Weapon oldBoW = new Weapon("oldBow", Rarity.COMMON);
		
		mySword.displayInfo();
		oldBoW.displayInfo();
		
		

	}

}
