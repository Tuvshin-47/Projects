class JavaConstructors {
    public static void main(String[] args) {
        Rectangle rect = new Rectangle();
        rect.height = 10.0; // dot notation
        rect.width = 20.0;
        System.out.println(rect.area());
        System.out.println(rect.perimeter());

        Square square = new Square(5);

        System.out.println(square.area());
        System.out.println(square.perimeter());


    }
}

// Circle гэдэг класс үүсгээд түүний radius-ийг нь зөвхөн гаднаас авдаг тэгээд тухайн Circle-ийн 
// талбай, тойргийн уртыг нь тус тусад нь харуулдаг функцууд бичээд тестлэнэ үү


// Box гэдэг классаа дахиж ашиглаад өргөн өндөр гүнийг нь конструктороор авдаг болгоорой.
//  

// Difficult Exercise
// Stack class
// Энэхүү класс нь дотроо 10 integer утга авдаг stock гэдэг хувийн array private member-тэй байх ёстой.
// Конструктор дотроо эхлээд stackHead гэдэг private member-ийн утгыг нь -1 гэж тодорхойлж өгөөрэй.
// энэхүү класс нь push, pop гэдэг 2 төрлийн функцтэй
// push функц нь item гэдэг параметр авна. Хэрвээ энэ функцыг дуудвал шинэ item parameter-ийг 
// stock гэдэг array дотроо нэмнэ. Гэхдээ тухайн stackHead-ийн утгыг нь нэгээр нэмээд index болгож тухайн
// item-ийг хадгална. Хэрвээ stackHead нь 9-тэй тэнцүү болон их бол "Stack is full" гэдэг мессэж хэвлэнэ.
// pop функц нь хэрвээ stackHead нь 0-оос бага байвал "Stack underflow" гэж хэвлэнэ. Гэхдээ энэхүү 
// функцыг зөвхөн дуудах үед энэ хэвлэгдэнэ. Тэгээд 0-ийг буцаана.
// бусад үед stock гэдэг array-гийн сүүлчийн элементийг устгана.

class TestStack{
    public static void main(String[] args) {
        Stack myStack1 = new Stack();
        Stack myStack2 = new Stack();

        for (int i = 0; i < 10; i++){
            // myStack1.push(i);
        }
        for (int i = 0; i < 10; i++){
            // myStack2.push(i);
        }
        System.out.println("Stack in myStack1");
        for(int i = 0; i < 10; i++){
            //System.out.println(myStack1.pop());
        }
        System.out.println("Stack in myStack2");
        for(int i = 0; i < 10; i++){
            //System.out.println(myStack2.pop());
        }
    }
}

// Stack in myStack1;

// 9 
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1 
// 0

class Stack{
    // TODO
}

class Square {
    private double side; // class information hiding

    Square(double side) { // class constructor - объект үүсгэгч функц
        this.side = side;
    }

    double area() {
        return side * side;
    }

    double perimeter() {
        return 4 * side;
    }
}

class Rectangle {
    double width;
    double height;

    double area() {
        return width * height;
    }

    double perimeter() {
        return 2 * (width + height);
    }
}