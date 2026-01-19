package AdventureGame;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Scanner;

public class GamePlayer {
	String name;
	int hp;
	ArrayList<String>inventory;
	
	GamePlayer(String name, int hp){
		this.name = name;
		this.hp = hp;
		this.inventory = new ArrayList<>();
		
		this.inventory.add("Модон сэлэм");
	}
	void showStatus() {
		System.out.println("\n--- БААТРЫН МЭДЭЭЛЭЛ ---");
		System.out.println("Амь: " + hp);
        System.out.println("Цүнхэнд байгаа зүйлс: " + inventory);
        System.out.println("------------------------\n");
	}
	
	public static void main(String[] args) {
	    Scanner sc = new Scanner(System.in);

	    
	    System.out.print("Баатрын нэрээ оруул: ");
	    String heroName = sc.nextLine();

	  
	    GamePlayer p1 = new GamePlayer(heroName, 100);

	    
	   
	    p1.inventory.add("Iron Sword");
	    p1.inventory.add("Wooden Shield");

	   
	    p1.showStatus();
	}

}
