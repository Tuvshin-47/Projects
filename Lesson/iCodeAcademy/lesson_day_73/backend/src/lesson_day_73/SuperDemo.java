package lesson_day_73;

public class SuperDemo {

	public static void main(String[] args) {
		///BoxWeightSuper myBox1 гэдэг класс утга нь : 10, 20, 15, 34.3
		BoxWeightSuper myBox1 = new BoxWeightSuper(10, 20, 15, 34.3);
		
		///BoxWeightSuper myBox2 гэдэг класс утга нь : 2, 3, 4, 0.076
		BoxWeightSuper myBox2 = new BoxWeightSuper(2, 3, 4, 0.076);
		///BoxWeightSuper myBox3 гэдэг класс утга нь : default
		///
		BoxWeightSuper myBox3 = new BoxWeightSuper();
		///BoxWeightSuper myCube гэдэг класс утга нь : 3, 2
		///
		BoxWeightSuper myCube = new BoxWeightSuper(3, 2);
		///BoxWeightSuper myClone гэдэг класс утга нь : myBox1 гэдэг Object байна.
		///
		BoxWeightSuper myClone = new BoxWeightSuper(myBox1);
		///myBox1-ийн volume, weight хэвлэнэ үү
		///
		System.out.println(myBox1.volume());
		System.out.println(myBox1.weight);
		///myBox2-ийн volume, weight хэвлэнэ үү
		System.out.println(myBox2.volume());
		System.out.println(myBox2.weight);
		///myBox3-ийн volume, weight хэвлэнэ ү
		System.out.println(myBox3.volume());
		System.out.println(myBox3.weight);
		///myCube-ийн volume, weight хэвлэнэ ү
		System.out.println(myCube.volume());
		System.out.println(myCube.weight);
		///myClone-ийн volume, weight хэвлэнэ үү
		System.out.println(myClone.volume());
		System.out.println(myClone.weight);

	}

}

class BoxWeightSuper extends Box {
	double weight;
	
	// super constructor
	BoxWeightSuper(double w, double h, double d, double m) {
		super(w, h, d);
		weight = m;
	}
	
//Энэ класстBox class-ийн үүсгэж болох бүх конструкторыг super ашиглан үүсгэдэг болгоно уу
	BoxWeightSuper() {
		super();
		weight = -1;
	}
	
	BoxWeightSuper(double len, double w){
		super(len);
		weight = w;
	}
	BoxWeightSuper(BoxWeightSuper obj){
		super(obj);
		weight = obj.weight;
	}
}