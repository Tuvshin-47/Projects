public class IntroJavaClass{
    //OOp-Object Oriented Programming Lang
    //Javascript - Dynamic Scripting Language - Web browser
    public static void main(String[] args) {
        Person tuguldur= new Person();  //tuguldur gdg shine object
        System.out.println(tuguldur);
        System.out.println(tuguldur.name);
        System.out.println(tuguldur.gender);

        Person nami = new Person();
        System.out.println(nami);
        System.out.println(nami.gender);
        nami.gender= false;
        System.out.println(nami.gender);

        Person Ganaa = new Person();
        System.out.println(Ganaa);
        Ganaa.gender= false;
        System.out.println(Ganaa.gender);


        Person natsag = new Person();
        System.out.println(natsag);
        System.out.println(natsag.gender);

    }
}

// Person - name, age, gender

class Person {
    // instance variable
    String name;
    int age;
    boolean gender =true;
}

class Person1 {
    // instance variable
    String name;
    int age;
    boolean gender =true;
}