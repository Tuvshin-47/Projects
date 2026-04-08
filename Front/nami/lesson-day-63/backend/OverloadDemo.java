class OverloadDemo{
    public static void main(String[] args) {
        Overload ol= new Overload();
        double result;
        ol.test(10);
        ol.test(10 ,20);
        ol.test(123.5);
        result= ol.test(5, 8, 9);
    }
}
class Overload{
    void test(){
        System.out.println("No Parameters");
    }
    void test (int a){
        System.out.println("a:" +a);
    }
    void test (int a, int b){
        System.out.println("a:" +a+"b:" +b);
    }
    double test(int a,int b, int c){
        return a*b*c;
    }
    void test (double a){
        System.out.println("a:" +a);
    }
}
