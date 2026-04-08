package JavaStart;

import java.util.ArrayList;



//abstract class Humanoid {
//    String name;
//    abstract void talk();
//}
//
interface Combatant{
	void attack();
}
//
//
//class Demon extends Humanoid implements Combatant{
//
//	@Override
//	public void attack() {
//		// TODO Auto-generated method stub
//		System.out.println("Demon Attacking");
//	}
//	
//	@Override
//	void talk() {
//		System.out.println("i am Demon");
//	}
//	
//}



public class Lesson12 {
	public static void main(String[] args) {
		
	ArrayList<Humanoid>mySquad = new ArrayList<>();
	
	mySquad.add(new Demon());
	mySquad.add(new Elf());
	mySquad.add(new Dwarf());
	
	System.out.println("--- Squad Status ---");
	
	for (Humanoid h : mySquad) {
        h.talk();
        
        if (h instanceof Combatant) {
            ((Combatant) h).attack();
        }
        System.out.println("----------------");
    }

//	public static void main(String[] args) {
//        // Өмнөх хичээл дээр үүсгэсэн Demon-оо шууд ашиглаж болно
//        Demon newDemon = new Demon(); 
//        newDemon.talk();
//        newDemon.attack();
//    }
	}
}
	
