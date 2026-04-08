
public class ArithmetikOp {
    public static void main(String[] args) {
        System.out.println("Lesson day 45");
        int a = 1+1;
        int b = a*3;
        int c = b/4;
        int d = c-a;
        int e = -d;
        System.out.println("a=" + a);
        System.out.println("b=" + b);
        System.out.println("c=" + c);
        System.out.println("d=" + d);
        System.out.println("e=" + e);
        System.out.printf("a mod b: %d %d\n", a%b,b%c);
        System.out.printf("c/d= %f\n", 1.54f);

        // increments
        int x=5;
        System.out.println(x);
        x++;
        System.out.println(x);
        System.out.println(++x);

        x=42;
        System.out.println(x);//42

        int y= ++x;
        System.out.println(y); //43
        System.out.println(x); //43

        x=42;
        y= x++;
        System.out.println(x); //43
        System.out.println(y); //42
    }
}
