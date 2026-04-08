public class Hello {

    static int addTwo(int a, int b) {
        return a + b;
    }

    static double addTwoDouble(double a, double b) {
        return a + b;
    }

    public static void main(String[] args) {
        int resultInt = addTwo(1, 3);
        System.out.println(resultInt);
        // double function-ийг бас оруулаад утга оноогоод хариуг нь хэвлэнэ үү
        double resultDouble = addTwoDouble(2.5, 5.6);
        System.out.println(resultDouble);
        System.out.println("Hello, World!");
    }
}

// Java is compiled language.

// functions
/*
 * Javascript
 * function addTwo(a, b){
 * return a + b;
 * }
 * dynamic typed language
 * 
 * addTwo(1, 3); 4
 * addTwo (1.5, 4.5); 6.0
 * addTwo('Hi', 'Bye'); HiBye
 * addTwo('Hi', 5.4);
 */