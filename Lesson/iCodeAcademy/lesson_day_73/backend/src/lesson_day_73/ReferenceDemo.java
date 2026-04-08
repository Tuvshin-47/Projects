package lesson_day_73;

public class ReferenceDemo {

	public static void main(String[] args) {
		BoxWeight weightBox = new BoxWeight(3, 5, 7, 8.37);		
		Box plainBox = new Box();
		double vol;
		
		vol = weightBox.volume();
		System.out.println("Volume of weightbox is "+ vol);
		System.out.println("Weight of weightbox is " + weightBox.weight);
		
		System.out.println("-----------");
		
//		BoxWeight object-ийг Box object-д оноож үзье
		plainBox = weightBox;
		
		vol = plainBox.volume();
		
		weightBox.depth = 10;
		weightBox.height = 11;
		weightBox.weight = 12;
		
		System.out.println(weightBox.volume());
		vol = plainBox.volume();
		
		System.out.println("Volume of plainbox is " + vol);
		//System.out.println(plainBox.weight); // 
	}

}
