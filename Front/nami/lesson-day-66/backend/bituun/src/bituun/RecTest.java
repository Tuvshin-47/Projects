package bituun;


public class RecTest {
	int values[];
	public RecTest(int i) {
      int values=i;
	}
	void printArray(int i ){
		if(i==0) {
			return;
		}else {
			printArray(i-1);
			System.out.println("["+ (i-1) +"]");
		}
	}
	

}

//RecTest objRecTest = new RecTest(10);
//int i;
//for (int n= 0; n<10; n++) {
//	objRecTest.values[i]=i
//}
//objRecTest.printArray(10);
//}
