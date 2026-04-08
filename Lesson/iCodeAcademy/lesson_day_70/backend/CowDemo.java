class CowDemo {
    public static void main(String args[]){
        Cow cow = new Cow("Moo", 10, 100, 100, 0);
        System.out.println(cow.name);
    }
}

class Cow{
   String name; 
   int age;
   int weight;
   int height;
   int legs;

   public Cow(String name, int age, int weight, int height, int legs){
       this.name = name;
       this.age = age;
       this.weight = weight;
       this.height = height;
       this.legs = legs;
   }
}