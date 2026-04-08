package lesson_day_68;

public class Calculator {

	int operand01 = 0;
	int operand02 = 0;
	String operator = "*";
	
	public Calculator(int op1,String op, int op2 ) {
		operand01 = op1;
		operand02 = op2;
		operator = op;
	}
	
	int add(int a, int b) {
		return a + b;
	}
	
	int minus (int a, int b) {
		return a - b;
	}
	
	void calculate() {
		switch (operator) {
		case "+":
			System.out.println("Add songoson" + operator);
			System.out.println("Result : " + add(operand02, operand01));
			break;

		default:
			break;
		}
////		if ()
//		if (operator.equals("+")) {
//			
//		}
	}
}
