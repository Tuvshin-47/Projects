package lesson_day_68;

public class StringDemo {

	public static void main(String[] args) {
		String strObj1 = "First String";
		String strObj2 = "Second String";
		String strObj3 = strObj1 + " and " + strObj2;
		
		System.out.println(strObj1);
		System.out.println(strObj2);
		System.out.println(strObj3);
		
//		length of the string
		System.out.println("Length of strObj1: " + strObj1.length());
		System.out.println("Char at index 3 in strObj1: " + strObj1.charAt(3));
		
//		Check equality of String objects
		if(strObj1.equals(strObj2)) {
			System.out.println("strObj1 == strObj2");
		} else {
			System.out.println("strObj2 != strObj2");
		}
		
		if (strObj1.equals(strObj3)) {
			System.out.println("strObj1 == strObj3");
		} else {
			System.out.println("strObj1 != strObj3");
		}
		
//		Minii nutag shuleg baigaa. Tuunig
		String poemString = "Hentii Hangai soyonii undur saihan nuruunuud\n"
				+ "\n"
				+ "Hoid zugiin chimeg bolson oi huvchiin uulnuud\n"
				+ "\n"
				+ "Menen Sharga Nominii urgun ih goviud\n"
				+ "\n"
				+ "Umnu zugiin manlai bolson elsen manhan dalainuud\n"
				+ "\n"
				+ "Ene bol minii tursun nutag\n"
				+ "\n"
				+ "Mongoliin saihan oron";
//		Exercises
//		Ex01 - Энэхүү шүлгийн хэсэг хэдэн үсгийн урттайг олно уу
		System.out.println("Poem has total of : " + poemString.length() + " characters");
//		Ex02 - Энэ шүлгийн дандаа сондгой index дээр байгаа үсэгнүүдийг хэвлэнэ үү
		for (int i = 1; i < poemString.length(); i = i + 2) {
			System.out.println("Index of " + i + " is " + poemString.charAt(i));
		}
//		Ex03 - Энэхүү шүлэг нь үгнээс бүтэж байна вэ
		int total = 0;
		for (int i = 0; i < poemString.length(); i++) {
			if(poemString.charAt(i) == ' ' || poemString.charAt(i) == '\n') {
				total += 1;
			}
		}
		System.out.println(total);
		
	}

}
