package lesson_day_76;

public class DemoShipment {

	public static void main(String[] args) {
	Shipment shipment1= new Shipment(10,20,30,40,3.41);
	Shipment shipment2= new Shipment(2,3,4,0.76,1.28);
	System.out.println("ship1 volume: "+shipment1.volume()); //6000
	System.out.println("   weight: "+ shipment1.getWeight());
	System.out.println("   Total cost: "+shipment1.getCost()*shipment1.getWeight());
	System.out.println("ship2 volume: "+shipment2.volume());
	System.out.println("   weight: "+shipment2.getWeight());
	System.out.println("   Total cost: "+shipment2.getCost()* shipment2.getWeight());
	}

}
