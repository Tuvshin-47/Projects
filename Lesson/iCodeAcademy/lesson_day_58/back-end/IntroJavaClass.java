public class IntroJavaClass{

    // OOP - Object Oriented Programming Language
    // Javascript - Dynamic Scripting Language - Web Browser
    public static void main(String[] args) {
        Person tuguldur = new Person(); // tuguldur гэдэг instance шинэ object
        System.out.println(tuguldur);
        System.out.println(tuguldur.name); // 
        System.out.println(tuguldur.gender);
        Person khangaikhu = new Person(); // khangaikhuu гэдэг instance шинэ object
        System.out.println(khangaikhu);
        System.out.println(khangaikhu.name);
        System.out.println(khangaikhu.gender);
        Person nami = new Person();
        System.out.println(nami);
        System.out.println(nami.gender); // eregtei
        nami.gender = false;
        System.out.println(nami.gender); // emegtei
        nami.name = "Hi Hi";
        // 2 хүний instance үүсгээд нэр насыг нь оноогоод хэвлэж харуулна уу
    }
}

// Person - name, age, gender
// const person = {
//     name: 'Khangai',
// }

class Person{
    // instance variable
    String name;
    int age;
    boolean gender = true;
}