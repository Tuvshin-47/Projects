package JavaStart;



class Humanoid{
	String race;
	String name;
	
	void talk() {
		System.out.println("We are humanoid Races");
	}
}
class Demon extends Humanoid{
	void talk() {
		System.out.println("i am Demon");
	}
}

class Elf extends Humanoid{
	void talk() {
		System.out.println("i am Elf");
	}
}

class Dwarf extends Humanoid{
	void talk() {
		System.out.println("i am Dwarf");
	}
}


public class Lesson10 {
//	public static void main(String[] args) {
//		Demon newDemon = new Demon();
//		newDemon.name = "Ajin";
//		
//		newDemon.talk();
//	}

}
