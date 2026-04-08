package Exercises;

public class Shape {
    public double calculateArea() {
        return 0.0;
    }
    
    public double calculatePerimeter() {
        return 0.0;
    }
}

class Circle extends Shape{
    double radius = 0;
    Circle(double value) {
        this.radius = value;
    }
    @Override
    public double calculateArea() {
        return Math.PI * radius * radius;
    }
    @Override
    public double calculatePerimeter() {
        return Math.PI * 2 * radius;
    }
}

class Rectangle extends Shape{
    double w = 0;
    double h = 0;
    Rectangle(double w, double h) {
        this.w = w;
        this.h = h;
    }
    @Override
    public double calculateArea() {
        return w * h;
    }
    @Override
    public double calculatePerimeter() {
        return 2 * w * h;
    }
}