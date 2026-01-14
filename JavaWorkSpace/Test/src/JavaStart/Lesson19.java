package JavaStart;



import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.Scanner;



public class Lesson19 {
	
	//Monsters
	
//	public static void main(String[] args) {
//		
//		ArrayList<String> monsters = new ArrayList<>();
//		
//		monsters.add("Undiyng");
//		monsters.add("Devil");
//		monsters.add("Werewolf");
//		
//		System.out.println("Нийт мангасын тоо: " + monsters.size());
//		
//		System.out.println("Эхний мангас: " + monsters.get(0));
//		
//		monsters.remove("Skelton");
//		monsters.add("Khangaukhuu Bagsh");
//		
//		
//		System.out.println("--- Одоо байгаа мангасууд ---");
//		for (String m : monsters) {
//			System.out.println(m);
//		}
//	}
	
public static void main(String[] args) {
	
	
	Scanner input = new Scanner(System.in);
	
	ArrayList<String> Inventory = new ArrayList<String>();
	
	System.out.println("\"--- Та 3 зэвсэг нэмнэ үү ---\"");
	
	for (int i = 0; i < 3; i++) {
		System.out.print((i + 1) + "-р зэвсэг: " );
		
		String weaponName = input.nextLine();
		
		Inventory.add(weaponName);
	}
	System.out.println("\nТаны Inventory-д дараах зүйлс байна:");
    System.out.println(Inventory);
    
    input.close();
    
    try (BufferedWriter bw = new BufferedWriter(new FileWriter("myinventory.txt"))){
    	for (String item : Inventory) {
    		bw.write(item);
    		bw.newLine();
    		
    	}
		System.out.println("___Items is saved in inventory___");
	} catch (IOException e) {
		System.out.println("!!!Items xадгалахад алдаа гарлаа!!!");
	}
	
}

}
