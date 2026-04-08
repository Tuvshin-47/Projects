package lesson_day_67;


public class ArrayRevisited {

	public static void main(String[] args) {
		int[] a1 = new int[10];
		int[] a2 = {3, 5, 7, 1, 8, 99, 44, -10};
		int[] a3 = {4, 3, 2, 1};
		
		System.out.println("Length of a1 is " + a1.length);
		System.out.println("Length of a2 is " + a2.length);
		System.out.println("Length of a3 is " + a3.length);
		
		// exercise
		// 5 элементтэй stack үүсгэнэ үү
		Stack stack01 = new Stack(5);
		// 8 элементтэй stack үүсгэнэ үү
		Stack stack02 = new Stack(8);
		
		// тэгээд 5 элементтэй stack руу 5 элемент нэмнэ үү
		for (int i = 0; i < 5; i++) {
			stack01.push(i);
		}
		// тэгээд 8 элементтэй stack руу 8 элемент нэмнэ үү
		for (int i = 0; i < 8; i++) {
			stack02.push(i);
		}
		
		// Одоо 5 элементтэй stack-ийг бүгдийг нь pop ашиглан хэвлэж харуулна уу
		for (int i = 0; i < 5; i++) {
			System.out.println(stack01.pop());
		}
		// Одоо 8 элементтэй stack-ийг бүгдийг нь pop ашиглан хэвлэж харуулна уу
		for (int i = 0; i < 8; i++) {
			System.out.println(stack02.pop());
		}
	}

}

class Stack {
	private int[] stack;
	private int tos;
	
	 Stack(int size) {
		 stack = new int[size];
		 tos = -1;
	}
	 
	 void push(int item) {
		 if(tos == stack.length - 1) {
			 System.out.println("Stack is full");
		 } else {
			 stack[++tos] = item;
		 }
	 }
	 
	 int pop() {
		 if(tos < 0) {
			 System.out.println("Stack underflow");
			 return 0;
		 } else {
			 return stack[tos--];
		 }
	 }
}