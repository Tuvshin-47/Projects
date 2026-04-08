package lesson_day_76;

public class DemoShipment {

	public static void main(String[] args) {
		// shipment 1 = 10, 20, 30, 40, 3.41
		// shipment 2 = 2, 3, 4, 0.76, 1.28

		// weight болон
		// volume-ийг нь тус бүрт нь хэвлэж
		// харуулна уу
		// shipment болгоны total cost-ийг
		// хэвлэнэ үү

		Shipment shipment1 = new Shipment(10, 20, 15, 10, 3.41);
		Shipment shipment2 = new Shipment(2, 3, 4, 0.76, 1.28);
		double vol;
		vol = shipment1.volume();
		System.out.println("Volume of shipment1 is " + vol);
		System.out.println("Weight of shipment1 is " + shipment1);
		System.out.println("Shipping cost: $" + shipment1);
		System.out.println();
		vol = shipment2.volume();
		System.out.println("Volume of shipment2 is " + vol);
		System.out.println("Weight of shipment2 is " + shipment2);
		System.out.println("Shipping cost: $" + shipment2);
	}

}
