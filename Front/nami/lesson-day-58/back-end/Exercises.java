

public class Exercises {
    public static void main(String[] args) {
        
        Box FindVolume = new Box();
        System.out.println(FindVolume);
        FindVolume.width=15;
        FindVolume.height=20;
        FindVolume.depth=30;
System.out.println(FindVolume.width*FindVolume.height*FindVolume.depth);
    }
    
}
class Box {
    // instance variable
    int width;
    int height;
    int depth;
}