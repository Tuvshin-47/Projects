package lesson_day_77;

public class lessonDay77 {
	
	public static int findMax(int[] array) {
		if (!isValidArray(array)) {
			throw new Error("Invalid array");
		}
		int max = array[0];
		for(int i = 1; i < array.length; i++) {
			if(max < array[i]) {
				max = array[i];
			}
		}
		return max;
	}
	
	public static int findMin(int[] array) {
		int min = array[0];
		for(int i = 1; i < array.length; i++) {
			if(min > array[i]) {
				min = array[i];
			}
		}
		return min;
	}
	
	private static Boolean isValidArray(int[] array) {
		return array != null && array.length > 0;
	}
	
//	public static double calculateAverage(int[] array) {
////		if (!) {
////			
////		}
//	}
	

	public static void main(String[] args) {
		int[] numbers = {5, 9, 3, 2, 8, 1, 6};

	}

}
