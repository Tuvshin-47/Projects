package lesson_day_87;

class FindMaximum {
	static int findMaximum() {
		int[] findMax = {1, 2, 4, 5, 6, -1, 100, 200};

		int i = 0;
		int largest = findMax[0];
		while(i < findMax.length) {
			if(findMax[i] > largest) {
				largest = findMax[i];
			}
			i = i + 1;
		}
		
		return largest;
	}
	
	public static void main(String[] args) {
		int foundMaxElement = findMaximum();
		System.out.println(foundMaxElement);
	}
}

abstract class Animal {
	int age;
	String gender;
	
	abstract boolean isMammal();
	abstract void mate();
}


class Duck extends Animal{

	private String beakColor = "Yellow";
	@Override
	boolean isMammal() {
		return false;
	}

	@Override
	void mate() {
		System.out.println("Duck is friendly");
	}
	
	void swim() {
		System.out.println("Duck is swimming");
	}
	
	void quack() {
		System.out.println("Duck is quacking");
	}
}

class Fish extends Animal{

	private int sizeIntFit;
	private boolean canEat;
	
	void swim() {
		System.out.println("Fish can swim");
	}
	
	@Override
	boolean isMammal() {
		return false;
	}

	@Override
	void mate() {
		System.out.println("Fish is not Friendly");
	}
	
	
}