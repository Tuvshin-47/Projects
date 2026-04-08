package lesson_day_67;

public class FInalClass {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Final final1 = new Final();
		System.out.println(final1.FILE_NEW); // because it is final
	}

}


class Final {
	final int FILE_NEW = 1;
	final int FILE_OPEN = 2;
	final int FILE_SAVE = 3;
	final int FILE_SAVEAS = 4;
	final int FILE_QUIT = 5;
}