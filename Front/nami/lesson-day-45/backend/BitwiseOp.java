
public class BitwiseOp {
    public static void main(String[] args) {
        System.out.println("Bitwise Operation");
        int a=5; //0101
        int b=7; //0111 = 0101 => 5
                 //   = | 0111=>7
                //    = ^ 0010=>2
                //   ~0101 = 1010=> -6
        // bitwase AND(&) operator
        System.out.println(a&b);
        // bitwise OR operator|
        System.out.println(a|b); //7

        // bitwise XOR operator ^
        System.out.println(a^b); //2

        // bitwase complement ~
        System.out.println(~a); // -6

        // arithmetik Left shift <<
        System.out.println(a<<1); //10
        System.out.println(b>>1); //3


    }
}
