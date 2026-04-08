import java.io.File;

public class DirectoryExample {
    public static void main(String[] args) {
        // Шинэ хавтас үүсгэх
        File directory = new File("MyFiles");
        if (directory.mkdir()) {
            System.out.println("Хавтас амжилттай үүслээ");
            
            // Файлыг шилжүүлэх
            File oldFile = new File("test.txt");
            File newFile = new File("MyFiles/test.txt");
            
            if (oldFile.renameTo(newFile)) {
                System.out.println("Файл амжилттай шилжлээ");
            } else {
                System.out.println("Файл шилжүүлэхэд алдаа гарлаа");
            }
        } else {
            System.out.println("Хавтас үүсгэхэд алдаа гарлаа");
        }
    }
}