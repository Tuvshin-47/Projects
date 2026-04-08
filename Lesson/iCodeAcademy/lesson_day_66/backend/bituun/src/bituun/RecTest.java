package bituun;

public class RecTest {

//	values гэдэг int төрөлтэй array property үүсгэнэ
	// instance variable - values
	int values[];
	
	// RecTest constructor нь i гэдэг утга авах бөгөөд
	// энэ нь array-г хэдэн элементтэй болохыг тодорхойлно
	
	public RecTest(int i) {
		values = new int[i];
	}
	
	// printArray гэдэг i гэсэн int төрөлтэй параметр 
	// авдаг функц байг. Ямар нэгэн утга буцаадаггүй.
	// хэрвээ i = 0 байвал зүгээр return хийнэ.
	
	// харин бусад үед
	// printArray гэдэг функцыг дахин recursive дуудахдаа
	// i - 1 гэдэг параметр өгнө.
	// одоо values array дотор байгаа утгыг дараах байдлаар
	// хэвлэнэ
	void printArray(int i) {
		if (i == 0) {
			return;
		}else {
			printArray(i - 1);
			System.out.println("[" + (i - 1) + "] " + values[i-1]);
		}
	}
	// [0] 0
	// [1] 1
	// [2] 2
	// ...
	
}
