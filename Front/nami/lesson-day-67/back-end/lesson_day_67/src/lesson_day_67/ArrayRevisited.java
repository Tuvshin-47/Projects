package lesson_day_67;

import java.util.Iterator;

public class ArrayRevisited {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		int [] a1= new int[10];
		int[] a2 = {3,5,7,3,3,5,7,88,99};
		int [] a3 = {4,3,2,1};
		System.out.println(a1.length);
		System.out.println(a2.length);
		System.out.println(a3.length);    
		
		
		
		// 5 element
		Stack firststack= new Stack(5);
		Stack secondstack= new Stack(8);
		for ( int i=0; i<5; i++) {
			firststack.push(i);
		}
		 for(int i=0; i<8; i++) {
			 secondstack.push(i);
		 }
		for (int i = 0; i < 5; i++) {
			System.out.println(firststack.pop());
			
		}
		for (int i = 0; i < 8; i++) {
			System.out.println(secondstack.pop());
			
		}
		
	}

}
class Stack{
	private int[] stack;
	private int tos;
	 Stack (int size){
		 stack= new int[size];
		 tos=-1;
	 }
	 void push(int item) {
		 if(tos == stack.length -1) {
			 System.out.println("Stack is full");
		 } else {
			 stack[++tos]= item;
		 }
	 }
	 int pop() {
		 if(tos < 0) {
			 System.out.println("Stack underflow");
			 
			 return 0;
		 }else {
			 return stack[tos--];
		 }
	 }
}
