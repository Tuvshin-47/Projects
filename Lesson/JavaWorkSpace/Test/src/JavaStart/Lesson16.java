package JavaStart;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

public class Lesson16 {

	public static void main(String[] args) {
		String fileName = "mysquad.txt";
		String content = "My Squad members: Demon, Eld, Dwarf";
		
		
		try {
			FileWriter fW = new FileWriter(fileName);
			
			BufferedWriter bw = new BufferedWriter(fW);
			
			bw.write(content);
			bw.newLine();
			bw.write("Game level: LEGENDARY");
			
			bw.close();
			System.out.println("File saved");
			
		} catch (IOException e) {
			// TODO: handle exception
			System.out.println("Error to Save");
			e.printStackTrace();
		}
	}
}
