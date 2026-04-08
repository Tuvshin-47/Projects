package lesson_day_73;

public class DemoBoxWeight {

	public static void main(String[] args) {
		BoxWeight boxWeigh01 = new BoxWeight(10, 20, 15, 34.3);
		System.out.println(boxWeigh01.volume()); // 3000
		System.out.println(boxWeigh01.weight); // 34.3
		
		ColorBox colorBox = new ColorBox(5, 10, 15, "Blue");
		System.out.println(colorBox.volume());
		System.out.println(colorBox.color);
	}

}

class Box {
	double width;
	double height;
	double depth;
	
	
	Box(Box ob){
		width = ob.width;
		height = ob.height;
		depth = ob.depth;
	}
	
	Box(double w, double h, double d){
		width = w;
		height = h;
		depth = d;
	}
	
	Box(){
		width = -1;
		height = -1;
		depth = -1;
	}
	// cube 
	Box (double len){
		width = height = depth = len;
	}
	
	double volume() {
		return width * height * depth;
	}
}

// BoxWeight гэдэг класс үүсгээд түүнийгээ Box class-ийг өргөтгөөд double weight нэмдэг болгоорой
// Шинээр weight-ийг нь авдаг конструктор нэмээрэй.
// Дээрх классуудыг дараах байдлаар тестлээрэй.
// BoxWeight нь 10, 20, 15, 34.3 гэдэг утгуудаар шинэ object үүсгээд түүний volume-ийг нь бодоорой
// BoxWeight нь 2, 3, 4, 0.076 гэдэг утгуудаар шинэ object үүсгээд түүний volume-ийг нь бодоорой
// тухайн object болгоны weight-ийг нь хэвлэж харуулаарай.

class BoxWeight extends Box{
	double weight;
//	Constructor, weight орсон
	 BoxWeight(double w, double h, double d, double m) {
		 width = w;
		 height = h;
		 depth = d;
		 weight = m;
	}
}

//ColorBox гэдэг Box class-аас уламжилсан color гэдэг instance variable-тай класс үүсгээрэй.
// Тэгээд color гэдэг утгыг нэмдэг конструктор үүсгээрэй. өндөр, өргөн, гүнг нь бас авна
// түүний color-ийг нь шинэ тест object үүсгээд хэвлэж харуулаарай. Бас volume-ийг нь хэвлээрэй.
class ColorBox extends Box{
	String color;
	ColorBox(double w, double h, double d, String c){
		width = w;
		height = h;
		depth = d;
		color = c;
	}
}

