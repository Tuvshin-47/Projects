package lesson_day_76;

 class Box {
	private double width;
	private double height;
	private double depth;

	// 1.
	Box(Box b) {
		width = b.width;
		height = b.height;
		depth = b.depth;
	}

	// 2.
	Box(double w, double h, double d) {
		width = w;
		height = h;
		depth = d;
	}

	// 3.
	Box() {
		width = -1;
		height = -1;
		depth = -1;
	}

	// 4.
	Box(double len) {
		width = height = depth = len;
	}

	double volume() {
		return width * height * depth;
	}
}

// BoxWeight 
class BoxWeight extends Box {
	private double weight;

	// constructors үүсгэх
	// 1. - we
	BoxWeight(BoxWeight bw) {
		super(bw);
		weight = bw.weight;
	}

	// 2.
	BoxWeight(double w, double h, double d, double bw) {
		super(w, h, d);
		weight = bw;
	}

	// 3.
	BoxWeight() {
		super();
		weight = -1;
	}

	// 4.
	BoxWeight(double len, double m) {
		super(len);
		weight = m;
	}
}

// Shipment class BoxWeight гэдэг классаас уламжилна 
// энэхүү класс нь double cost гэдэг instance variable-тай. Бүх конструкторуудыг үүсгэнэ үү

class Shipment extends BoxWeight {
	private double cost;

// construct clone of an object
	Shipment(Shipment ob) { // pass object to constructor
		super(ob);
		cost = ob.cost;
	}

// constructor when all parameters are specified
	Shipment(double w, double h, double d, double m, double c) {
		super(w, h, d, m); // call superclass constructor
		cost = c;
	}

// default constructor
	Shipment() {
		super();
		cost = -1;
	}

// constructor used when cube is created
	Shipment(double len, double m, double c) {
		super(len, m);
		cost = c;
	}
}
