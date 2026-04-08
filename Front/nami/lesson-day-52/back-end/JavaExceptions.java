public class JavaExceptions {

    static void throwDemo() {
        try {
            throw new NullPointerException("demo");
        } catch (Exception e) {
            System.out.println("Caught inside throw Demo.");
            throw e; // rethrow the exception
        }
    }

    static void shoppingLoader() {
        boolean isLoading = false;

        try {
            isLoading = true;
            System.out.println("Customer is shopping");
            System.out.println(6 / 0);
        } catch (Exception e) {
            System.out.println("Exception occurred" + e.getMessage());
        } finally {
            isLoading = false;
            System.out.println("This part always executes at the end: " + isLoading);
        }

    }

    static void manyExceptions(String args[]) {
        try {
            int a = args.length;
            System.out.println("a = " + a);
            int b = 42 / a;
            int c[] = { 1 };
            c[42] = 99;
            System.out.println(b);
        } catch (ArithmeticException e) {
            System.out.println("Divide by 0: " + e);
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Array index oob: " + e);
        }
        System.out.println("After try/catch blocks.");
    }

    static void indexOutOfBound() {
        int[] a = { 1, 3, 4 };
        try {
            System.out.println(a[10]);
        } catch (Exception e) {
            System.out.println("Index out of bound Exception");
        }

    }

    static void divisionByZero(int number) {
        try {
            System.out.println("The number division is " + number / 0);
            System.out.println("Inside Try");
        } catch (Exception e) {
            System.out.println("Exception" + e.getMessage());
        }
        System.out.println("Outside Try");
    }

    public static void main(String[] args) {
        System.out.println("Java Exceptions");
        divisionByZero(10);
        indexOutOfBound();
        manyExceptions(args);
        shoppingLoader();

        try {
            throwDemo();

        } catch (Exception e) {
            System.out.println("Program exception caught again");
        }

        System.out.println("Program ends here");
    }
}