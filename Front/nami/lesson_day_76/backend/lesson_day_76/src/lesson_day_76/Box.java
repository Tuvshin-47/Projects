package lesson_day_76;

public class Box {
	private double width;
	private double height;
	private double depth;
	
	Box(Box b){
		width= b.width;
		height= b.height;
		depth= b.depth;
	}
	Box(double w, double h, double d){
		width=w;
		height=h;
		depth=d;
	}
	Box(){
		width=-1;
		height=-1;
		depth=-1;
	}
	Box(double len ){
		width= height= depth= len;
	}
	double volume() {
		return width *height * depth;
	}
}

class BoxWeight extends Box{
	private double weight;
	
	public double getWeight() {
		return weight;
	}
	 BoxWeight(BoxWeight bw) {
		 super(bw);
		 weight=bw.weight;
	}
	BoxWeight(double w, double h, double d, double bw) {
		 super (w,h,d);
		 weight = bw;
	}
	BoxWeight(){
		super();
		weight=-1;
	}
	BoxWeight (double len, double m){
		super(len);
		weight =m;
	}
}
class Shipment extends BoxWeight{
	private double cost;
	public double getCost() {
		return cost;
	}
	
	Shipment(Shipment sc){
		super(sc);
		cost= sc.cost;
	}
	Shipment (double w, double h, double d, double bw, double sc ){
		super(w,h,d, bw);
		cost= sc;
	}
	Shipment(){
		super();
		cost=-1;
	}
	Shipment(double len ,double m, double c){
		super(len, m);
		cost=c;
		
	}
}
