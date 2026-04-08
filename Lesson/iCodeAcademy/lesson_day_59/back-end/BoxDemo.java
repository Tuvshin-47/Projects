public class BoxDemo{
    public static void main(String[] args) {
        Box mybox1 = new Box(); // Object - Instance
        Box mybox2 = new Box();
        double vol;
        mybox1.width = 10;
        mybox1.height = 20;
        mybox1.depth = 15;

        mybox2.width = 3;
        mybox2.height = 6;
        mybox2.depth = 9;

        vol = mybox1.width * mybox1.height * mybox1.depth;
        System.out.println("Volume is " + vol);

        vol = mybox2.width * mybox2.height * mybox2.depth;
        System.out.println("Volume is " + vol);

        // Assigning Object Reference Values
        Box b1 = new Box();
        b1.depth = 10;
        Box b2 = b1;
        System.out.println(b1);
        System.out.println(b2);
        System.out.println(b1.depth);
        System.out.println(b2.depth);
        b2.depth = 12;
        System.out.println(b1.depth);
        System.out.println(b2.depth);
        b1.height = 6;
        b1.width = 8;
        b1.volume();

    }
}

class Box {
    double height;
    double width; 
    double depth;

    void volume(){
        System.out.print("Volume is ");
        System.out.println(width * height * depth);
    }
}

// 