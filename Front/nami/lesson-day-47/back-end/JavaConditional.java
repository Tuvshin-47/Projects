
public class JavaConditional {
    static double floatAddTwo(float c,float d){
        if (c>d){
            return c;
        } else {
            return d;

        } 
    }
    static void EnterNumber(int age){
        if(age>=0 && age<=13){
            System.out.println("baby");
        } else if(age>=13 && age<=19){
            System.out.println("teenager");
        } else if(age>=20&& age<=65){
            System.out.println("adult");
        } else if(age>=65&&age<=99){
            System.out.println("Senior");
        }else {
            System.out.println("Dinosuar");
        }
    }
    
        public static void main(String[] args) {
        short a = 6;
        short b=7;
        if (a>b){
            System.out.println(a + " is bigger than " + b);
        } else {
            System.out.println(b + " is bigger than " + a);

        }
        // dasgal 1
        System.out.println(floatAddTwo(14.5f, 2.3f));
        EnterNumber(20);
        // dasgal 2


    }
}
