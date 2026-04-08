package JavaStart;

import java.util.HashMap;
import java.util.Scanner;
import java.util.jar.Attributes.Name;

//Hashmap

public class Lesson20 {
//public static void main(String[] args) {
//	
//	HashMap<String, Integer> weaponDamage = new HashMap<>();
//	
//	weaponDamage.put("sword", 50);
//	weaponDamage.put("oldbow", 30);
//	weaponDamage.put("dagger", 15);
//	
//	System.out.println("Sword-damage: " + weaponDamage.get("sword"));
//	
//	if (weaponDamage.containsKey("Sword")) {
//		System.out.println("We Have Sword");
//	}
//	
//	System.out.println("All weapon power: " + weaponDamage);
//	}
	
	
	
	public static void main(String[] args) {
		HashMap<String, Integer> enemyHp = new HashMap<>();
		
		enemyHp.put("Dracula", 8000);
		enemyHp.put("Wraith KIng", 10000);
		enemyHp.put("Dark Lord", 9000);
		
		
		Scanner input = new Scanner(System.in);
		
		System.out.print("Chose your enemy: ");
		String name = input.nextLine();
		
		if (enemyHp.containsKey(name)) {
			int hp = enemyHp.get(name);
			System.out.println("Name: " + name + " | Health Points: " + hp);
			
		}else {
			System.out.println("we dont have that enemy!!!");
		}
		
	}
}
