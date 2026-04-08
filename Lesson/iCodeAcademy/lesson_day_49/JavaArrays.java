// Java strongly typed language
// бүх төрлийг нь зааж байгаад дараа нь Java Bytecode луу 
// хөрвүүлж compile хийгээд 
// дараа нь түүнийгээ JVM дээр ажиллуулна.

public class JavaArrays {

    static void multiDimensionArray(){
        int[][] multi = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9},
          };

        for(int i = 0; i < multi.length; i++){
            for(int j = 0; j < multi[i].length; j++){
                System.out.println(multi[i][j]);
            }
        }

    }

    static void findEvenNumbers() {
        int[] nums = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };

        // 0, 2, 4, 6, 8
        for (int i : nums) {
            System.out.print(i + " ");
            if (i % 2 == 0) 
                continue;
            System.out.println("");
        }
    }

    static void forBreakExample(int value) {
        int[] nums = { 1, 6, 8, 3, 7, 5, 6, 1, 4 };
        boolean found = false;
        for (int x : nums) {
            if (x == value) {
                found = true;
                break;
            }
        }

        if (found)
            System.out.println("Value found!");
        if (!found)
            System.out.println("Value not found");

    }

    static void findAverageAge() {
        int ages[] = { 20, 22, 18, 35, 48, 26, 87, 70 };

        float result = 0;
        for (int i = 0; i < ages.length; i++) {
            result += ages[i];
        }
        float average = result / ages.length;
        System.out.println("The average age is: " + average);
    }

    static void findAverage() {
        double[] nums = { 10.1, 11.2, 12.3, 13.4, 14.5 };
        double result = 0;
        int total_length = nums.length;
        // Find the average here
        // Solution here
        for (int i = 0; i < nums.length; i++) {
            result += nums[i];
            // result = result + nums[i];
        }
        System.out.println("Average is " + result / total_length);
    }

    static void createArray() {
        int[] monthDays;
        monthDays = new int[12]; // 12 ширхэг элемент хадгална
        System.out.println(monthDays);

        monthDays[0] = 31;
        monthDays[1] = 28;
        monthDays[2] = 31;

        for (int i = 0; i < monthDays.length; i++) {
            System.out.println((i + 1) + "-р сар " + monthDays[i] + " хоногтой.");
        }

    }

    public static void main(String[] args) {
        // primitive type
        // Integer Array
        int[] numberArray = { 3, 6, 7, 2 };
        System.out.println(numberArray);
        System.out.println(numberArray[0]);
        // Double array
        double[] doubleArray = { 3.2, 2.8, 2.9, 2.4 };
        System.out.println(doubleArray[2]);

        // string array
        String[] stringArray = { "Five", "Seven" };
        System.out.println(stringArray[1]);

        // boolean array
        boolean[] boolArray = { true, false };
        System.out.println(boolArray[0]);

        char[] charArray = { 'A', 'B', 'C' };
        System.out.println(charArray[2]);

        createArray();

        findAverage();

        findAverageAge();
        forBreakExample(4);
        forBreakExample(11);

        findEvenNumbers();

        multiDimensionArray();
    }
}