public class Functions{

    static void addTwoNumbers(double a, double b){
        double c = a + b;
        System.out.println(c);
    }

    // 2 тоо нэмдэг function бичье
    static void addTwoNumbers(int a, int b){
        int c = a + b;
        System.out.println(c);
    }

    static double addTwoNumbers(float a, float b){
        return a + b;
    }


    public static void main(String[] args) {
        System.out.println("Java functions");
        // 3 + 5
        addTwoNumbers(3, 5);
        // 10 + 7
        // -10 + 11

        // 10.5, 20.5 ?

        System.out.println(addTwoNumbers(10.5f, 15.5f));
    }
}