public class OverloadConstructor {
    public static void main(String[] args) {
        Box type1 = new Box();
        System.out.println(type1.volume());
        Box type2 = new Box(10);
        System.out.println(type2.volume());
        Box type3 = new Box(4, 7, 4);
        System.out.println(type3.volume());
    }
}



class Box {
    double width;
    double height;
    double depth;


    Box(double w, double h, double d){
        width = w;
        height = h;
        depth = d;
    }



    Box(){
        width = -1;
        height = -1;
        depth = -1;
    }


    Box(double len){
        width = height = depth = len;
    }

    double volume(){
        return width * height * depth;
    }
}