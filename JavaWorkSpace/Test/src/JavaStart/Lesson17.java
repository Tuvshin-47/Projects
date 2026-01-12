package JavaStart;
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class Lesson17 {
public static void main(String[] args) {
	
	try {
		BufferedReader br = new BufferedReader(new FileReader("mysquad.txt"));
		String line;
		
		System.out.println("File Content");
		
		while ((line = br.readLine()) != null) {
			System.out.println(line);
		}
		br.close();
	} catch (Exception e) {
		System.out.println("Файл уншихад алдаа гарлаа!");
	}
}
}
