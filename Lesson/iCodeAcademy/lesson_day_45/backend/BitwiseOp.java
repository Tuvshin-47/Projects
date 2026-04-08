public class BitwiseOp {
    public static void main(String[] args) {
        System.out.println("Bitwise Operator");
        int a = 5; // 0101
        int b = 7; // 0111 =& 0 1 0 1 => 5
                   // =| 0 1 1 1 => 7
                   // =^ 0 0 1 0 => 2
                   // ~0101 = 1010 => -6

        // bitwise AND operator &
        System.out.println(a & b); // 5

        // Bitwise OR operator |
        System.out.println(a | b); // 7

        // bitwise XOR operator ^
        System.out.println(a ^ b); // 2

        // bitwise complement ~
        System.out.println(~a); //

        // arithmetik left shift <<
        System.out.println(a << 1); // 10

        // arithmetik right shift >>
        System.out.println(b >> 1); // 3
    }
}
