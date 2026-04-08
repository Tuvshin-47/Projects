import java.io.File;
import java.io.IOException;
public class CreateFileExample {
    public static void main(String[] args) {
        try {
            File file = new File("newfile.txt");

            
            // success
            if(file.createNewFile()){
                System.out.println("Successed to create");
            } else {
                System.out.println("Already Created");
            }
        }catch (IOException e){
            System.out.println("Erroring" + e.getMessage());
        }
        }
    }
