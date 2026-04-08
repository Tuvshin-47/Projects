public class JavaConditionals {

    // Ex01
    // 2 float тоог параметраар аваад түүний ихийг нь буцаадаг функц бичээрэй.
    // main function дотор дуудаж ажиллуулаарай.
    
    // Ex02
    // Параметраар нэг бүхэл тоо авдаг функц бичнэ үү. Энэ тоо хүний насыг илэрхийлнэ.
    // Хэрвээ тухайн тоо нь 0-13 хооронд байвал Та хүүхэд
    // 13-19 хооронд байвал Teenager
    // 20 - 65 хооронд байвал Adult
    // 65 - 99 хооронд байвал Senior
    // 100-аас дээш байвал Dinosaur гэж хэвлэдэг болгоорой.

    public static void main(String[] args) {
        short a = 6;
        short b = 7;
        if(a > b){
            System.out.println(a + " is bigger than " + b);
        } else {
            System.out.println(b + " is bigger than " + a);
        }
    }
}