package bituun;

public class Test {
	int a;
	Test(int i ){
		a=i;
	}
	Test incrementByTen() {
		Test temp = new Test(a+10);
		return temp;
	}
}
