package JavaStart;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;


class Hero {
    String name;
    int level;
    int hp;
    
    Hero(String name, int level, int hp){
        this.name = name;
        this.level = level;
        this.hp = hp;
    }
    
    public void saveGame() {
        try (BufferedWriter bw = new BufferedWriter(new FileWriter("savegame.txt"))) {
            bw.write(name + "," + level + "," + hp);
            System.out.println("Тоглоом амжилттай хадгалагдлаа!");
        } catch (IOException e) {
            System.out.println("Хадгалахад алдаа гарлаа.");
        }
    }

    public void display() {
        System.out.println("Баатар: " + name + " | Level: " + level + " | HP: " + hp);
    }
} 


public class Lesson18 {
    public static void main(String[] args) {
        Hero myHero = new Hero("Marci", 15, 2000);
        myHero.saveGame();
        
        System.out.println("Файлаас мэдээлэл уншиж байна...");
        
        try (BufferedReader br = new BufferedReader(new FileReader("savegame.txt"))){
            String data = br.readLine();
            
            if (data != null) {
                String[] parts = data.split(",");
                String name = parts[0];
                int level = Integer.parseInt(parts[1]);
                int hp = Integer.parseInt(parts[2]);
                
                Hero loadedHero = new Hero(name, level, hp);
                loadedHero.display();
            }
        } catch (Exception e) {
            System.out.println("Уншихад алдаа гарлаа: " + e.getMessage());
        }
    }
}