class JavaConstructors{
    public static void main(String[] args) {
        Rectangle rect= new Rectangle();
        rect.height =10.0; // dot notation
        rect.width =20.0;
        System.out.println(rect.area());
        System.out.println(rect.perimeter());
        

        Square square = new Square(5);
        System.out.println(square.area());
        System.out.println(square.perimeter());

        Circle circle = new Circle(4);
        System.out.println(circle.toirgiinUrt());
        System.out.println(circle.talbai());

    }
}

class Circle {
    private double circle;

    Circle(double circle){
        this.circle=circle;
    }
    double toirgiinUrt(){
        return 3.14*circle*2;
    }
    double talbai(){
        return 3.14+circle*circle;
    }

}

class Square{
    private double side; //private ashiglaj bgaa tohiioldold dot not ashiglaj blgui(information hiding)
    
    Square(double side){ // class constructor-obyect uusgegch funkts

        this.side = side;
    }
    
    double area(){
        return side*side;
    }
    double perimeter(){
        return 4*side;
    }
}


class Rectangle{
    double width;
    double height;
    double area(){
        return width*height;
    }
    double perimeter(){
        return 2*(width*height);
    }
}