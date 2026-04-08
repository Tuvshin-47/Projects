package lesson_day_68;

public class Calculator {
	int operand1 = 0;
	int operand2 = 0;
	String operator = " ";
  public Calculator(int op1, int op2, String op) {
		operand1=op1;
		operand2=op2;
		operator=op;
	}
  public Calculator(String string, String string2, String op) {
	// TODO Auto-generated constructor stub
}
int add(int a, int b) {
	  return a+b;
  }
  int minus(int a, int b) {
	  return a-b;
  }
  int multiply(int a, int b) {
	  return a*b;
  }
  int devide(int a,int b ) {
	  return a/b;
  }
  void calculate() {
	  if(operator.equals("+")){
		 System.out.println("add songoson" + operator);
		 System.out.println("Result "+ add(operand2, operand1));
	  } 
		
	}
	  
  }
