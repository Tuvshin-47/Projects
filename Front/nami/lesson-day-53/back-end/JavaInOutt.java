import java.io.File;
import java.io.IOException;
public class JavaInOutt {

    static void openFile(String fileName){
        File file = new File(fileName);
        System.out.println("File exists:" + file.exists());
        System.out.println("File length:" + file.length());
        System.out.println("File name:" + file.getName());
        System.out.println("File path:" + file.getPath());
        System.out.println("File absolute path:" + file.getAbsolutePath());
        System.out.println("File parent:" + file.getParent());
        System.out.println("File writable:" + file.canWrite());
        System.out.println("File readable:" + file.canRead());
        System.out.println("File is a directory:" + file.isDirectory());
        System.out.println("File is a file:" + file.isFile());
        System.out.println("File is a hidden:" + file.isHidden());
        System.out.println("File is a last modified:" + file.lastModified());
        System.out.println("File size:" + file.length());
        System.out.println("File renamed:" + file.renameTo(new File("newfile.txt")));

    }
    public static void main(String[] args) {
        openFile("file.txt");
        
    }
}
