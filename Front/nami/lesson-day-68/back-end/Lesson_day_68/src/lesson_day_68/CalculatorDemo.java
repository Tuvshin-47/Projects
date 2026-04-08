package lesson_day_68;

public class CalculatorDemo {

	public static void main(String[] args) {
		
		int operand1= Integer.parseInt(args[0]);
				int operand2= Integer.parseInt(args[1]);
				Calculator calculator = new Calculator(operand1, operand2, args[2]);
				calculator.calculate();
	}

}
