package lesson_day_73;

public class SimpleInheritance {
	public static void main(String[] args) {
		A superObj  = new A();
		B subObj = new B();
		
		superObj.i = 10;
		superObj.j = 20;
		
		System.out.println("Contents of superObj: ");
		superObj.showij();
		System.out.println();
		
//		subObj-ийн i, j, k дээр утгууд оноогоод showij, 
		subObj.i = 7;
		subObj.j = 8;
		subObj.k = 10;
		//showk гэдэг функцүүдийг дуудаад харуулна уу
		subObj.showij();
		subObj.showk();
		// бас superObj-ээс showk функцыг дуудаж болж байгаа эсэхийг шалгана уу
		// sum функцыг бас дуудаж харуулаарай.
		subObj.sum();
	}
}

//father and son
class Father {
	String name;
	int age;
	//	name
	// age
	
	// өөрийгөө танилцуулдаг introduceMe гэдэг функц бичнэ үү
	void introduceMe() {
		System.out.println("Hi my name is " + name + ". I'm "+ age + " years old");
	}
	
}


//Son гэдэг class үүсгээд түүнийгээ Father class-аас уламжлаад тэгээд үсний өнгө оруулдаг
//instance variable үүсгээрэй.
class Son extends Father{
	String hairColor;
}


class A {
	int i,j;
	
	void showij() {
		System.out.println("i and j : " + i + " " + j);
	}
}


class B extends A{
	int k;
	
	void showk() {
		System.out.println("k: " + k);
	}
	
	void sum() {
		System.out.println("i + j + k" + (i + j + k));
	}
}







