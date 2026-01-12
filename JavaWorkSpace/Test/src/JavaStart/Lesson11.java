package JavaStart;

public class Lesson11 {

	public static void main(String[] args) {
		Humanoid[] characters = new Humanoid[3];
		
		characters[0] = new Demon();
		characters[1] = new Dwarf();
		characters[2] = new Elf();

		
		for (Humanoid character: characters) {
			character.talk();
		}
	}

}
