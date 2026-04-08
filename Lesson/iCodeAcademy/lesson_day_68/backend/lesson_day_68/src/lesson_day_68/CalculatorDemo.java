package lesson_day_68;

public class CalculatorDemo {

	public static void main(String[] args) {
		// 5 * 5
		// args[0] -> 5
		// args[1] -> *
		// args[2] -> 5
		int operand01 = Integer.parseInt(args[0]);
		int operand02 = Integer.parseInt(args[2]);
		String operator = args[1];
		Calculator calculator = new Calculator(operand01, operator, operand02 );
		calculator.calculate(); // 25
		calculator.add(5, 10);

	}

}
