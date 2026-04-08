public class Exercises {
    public static void main(String[] args) {
        Cat myCat = new Cat();
        myCat.species = "Cat";
        myCat.name = "Sonja";
        myCat.age = 4;
        myCat.color = "White";

        System.out.println("Species: " + myCat.species);
        System.out.println("Name: " + myCat.name);
        System.out.println("Age: " + myCat.age);
        System.out.println("Color: " + myCat.color);

        myCat.whichCatIs();
    }
}

class Cat {
    String species;
    String name;
    String color;
    int age;

    void whichCatIs() {
        System.out.println("im a" + myCat.species);
    }
}