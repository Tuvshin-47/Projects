
public class JavaArrays {


    static void multiDimensionArray(){
        int [][] multi ={
            {1,2,3},
            {4,5,6},
            {7,8,9},
        };
    
        for (int i=0; i < multi.length; i++){
            System.out.println(" -"+" -"+" -" );
            System.out.print("|");
            for(int j=0; j < multi[i].length; j++){
                
                System.out.print(  multi[i][j] +"|");
            }
           
            System.out.println();
        }
        System.out.println(" -"+" -"+" -");
    }

    // static void findEvenNumbers() {
    //     int[] Findnums = {0,1,2,3,4,5,6,7,8,9};
       
    //     for(int i: Findnums){
    //         System.out.println(i+ " ");

    //     }
    // }
    

    static void forBreakExample (int value){
        int[] nums = {1,6,8,3,7,5,6,1,4};
        boolean found = false;
        for(int x: nums){
            if(x== value){
                found=true;
                break;
            }
        }
        if(found) System.out.println("Value found");
        if(!found) System.out.println("Value not found");
    }

    static void findAverageAge(){
        int ages[] = {20,22, 18, 35, 48, 26, 87, 70};
        int resultAge = 0;
        int totalAge_length= ages.length;

        for(int i=0 ; i<ages.length; i++){
            resultAge+= ages[i];
        }
        System.out.println("AverageAge is "+ resultAge / totalAge_length);
    }

    static void findAverage (){
        double[] nums = {10.1,11.2,12.3,13.4, 14.5};
        double result = 0 ; 
        int total_length = nums.length;



        for(int i=0 ; i <nums.length; i++){
            result += nums[i];
        }
    
        System.out.println("Average is "+ result / total_length);
    
    }

    static void createArray(){
        int[] monthDays;
        monthDays = new int[12];
        System.out.println(monthDays);

        monthDays[0] = 31;
        monthDays[1] = 28;
        monthDays[2] = 31;
        monthDays[3] = 30;
        monthDays[4] = 31;
        monthDays[5] = 30;
        monthDays[6] = 31;
        monthDays[7] = 30;
        monthDays[8] = 31;
        monthDays[9] = 30;
        monthDays[10] = 31;
        monthDays[11] = 30;

        for(int i=0 ; i <monthDays.length; i++){
            System.out.println((i+1)+ "r sar "+monthDays[i]+ "Honogtoi");
        }
    }
    public static void main(String[] args) {
        // permitive type
        // Int array
        int[] numberArrray ={3,6,7,2};
        System.out.println(numberArrray);
        System.out.println(numberArrray[0]);

        // Double Array 
        double[] doubleArray= {3.2 , 2.8 , 2.9 ,2.4};
        System.out.println(doubleArray[2]);

        // string array 
        String [] stringArray = {"Five", "Seven"};
        System.out.println(stringArray[1]);

        // boolean array
        boolean[] boolArray ={true, false};
        System.out.println(boolArray[0]);

        char[] charArray = {'A', 'B', 'C'};
        System.out.println(charArray[2]);

        createArray();
        findAverage();
        findAverageAge();
        forBreakExample(11);
        multiDimensionArray();
    }
}
