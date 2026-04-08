package backend;

public class VarExercise {

	static void vaTest(String vString, int ...v) {
		System.out.println(vString + " : " + v.length + " Contents");
		for(int x: v) {
			System.out.println(x + " ");
		}
		System.out.println();
	}
	
	public static void main(String[] args) {
		vaTest("One vararg: ", 10);
//		One vararg: 1 Contents: 10
		vaTest("Three varargs", 1, 2, 3);
// 		Three varargs: 3, Contents: 1 2 3
		vaTest("No varargs");
		// No varargs: 0 Contents: 
	}

}
