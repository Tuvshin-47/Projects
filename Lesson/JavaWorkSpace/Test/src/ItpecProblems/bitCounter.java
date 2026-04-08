package ItpecProblems;


public class bitCounter {
	
	public static int count1(byte rbyte) {
		int r = 0;
	
	
	 for (int i = 1; i <= 8; i++) {
		 if ((rbyte & (1 << (i - 1))) != 0) {
			r = r +1;
		}
	 }
	
	 return r;
	}	
	

	public static void main(String[] args) {
		
		byte myByte = (byte) 0b11001011;
		System.out.println("1-iin too: " + count1(myByte));
	}
}
