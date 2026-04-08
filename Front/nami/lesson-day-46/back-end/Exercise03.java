public class Exercise03 {
    // dasgal 2
    static void addTwoNumbers(int a, int b ){
        System.out.println(a+b);
        System.out.println(a-b);
        System.out.println(a*b);
        System.out.println(a/b);
    }
    public static void main(String[] args) {
        // dasgal 1
        char credit= 'A';
        int age= 10;
        float height=165.2f;
        System.out.println("My credit is "+ credit);
        System.out.println("Age is "+ age);
        System.out.println("my height is "+height);
        // dasgal 2 
        addTwoNumbers(5, 10);
        // dasgal 3
        boolean isStudent = true;
        System.out.println("Student :" + isStudent);
        // dasgal 4
        double width , height2;
        width = 5;
        height2 = 10;
        System.out.println("["+width+"]"+"_"+"["+height2+"]"+"="+"["+width+"+"+height2+"]");
        // dasgal 5
        char letter ='B';
        System.out.println((int)letter);
        // dasgal 6 
        byte myNum = 127;
        System.out.println(myNum+1);
    }
}
