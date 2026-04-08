import java.io.File;
import java.io.IOException;

public class CreateFileExample {
    public static void main(String[] args) {
        try {
            File file = new File("newfile.txt");
            
            if (file.createNewFile()) {

            } else {

            }

        } catch (IOException e) {

        }
    }
}
