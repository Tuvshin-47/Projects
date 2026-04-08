package lesson_day_68;

public class StringDemo {

	public static void main(String[] args) {
		String strObj1= "First String";
		String strObj2= "Second String";
		String strObj3= strObj1 + "and"+strObj2;
		
		System.out.println(strObj1);
		System.out.println(strObj2);
		System.out.println(strObj3);
		
		
		//length pf the string
		
		System.out.println("length of strobj1"+strObj1.length());
		System.out.println("char at index 3 in strobj1"+ strObj1.charAt(3));
		
		
		//check equality of String objects
		
		if(strObj1.equals(strObj2)) {
	
			
			System.out.println("strobj1=strobj2");
			
		}else {
			System.out.println("strobj2!= strobj2");
		} 
		if(strObj1.equals(strObj3)) {
			System.out.println("strobj1=strobj3");
		}else {
			System.out.println("strobj2!= strobj3");
		} 
		
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
		
		System.out.println("Shulgiin usgiin urt:"+poemString.length());
		for (int i = 1; i < poemString.length(); i=i+2) {
			System.out.println(" Index of "+ i + " is " + poemString.charAt(i));
		}
		int total = 0;
		for (int i = 0; i < poemString.length(); i++) {
			if(poemString.charAt(i)== ' ' || poemString.charAt(i) =='\n'&& poemString.charAt(i+1) =='\n' ) {
				total+=1;
				
			}
	
		}
		
		System.out.println( ++total);
	}

}
