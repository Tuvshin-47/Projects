package lesson_day_77;

import java.util.Arrays;

public class Student {

	private String name;
	private String id;
	private int[] grades;

	Student(String nameString, String idString, int[] grades) {
		this.name = nameString;
		this.id = idString;
		this.grades = grades;
	}

	public String getName() {
		return name;

	}

	public String getId() {
        return id;
	}

	public int[] getGrade() {
        return grades;
	}

	public double calculateAverage() {
		double sum = 0;
		for (int i = 0; i < grades.length; i++) {
			sum += grades[i];
		}
		return sum / grades.length;
	}

	public char getLetterGrade() {
	    double average = calculateAverage();
	    if(average >= 90 && average <= 100) {
	    	return 'A';
	    }else if(average >= 80) {
	    	return 'B';
	    }else if(average >= 70) {
	    	return 'C';
	    }else if(average >= 60) {
	    	return 'D';
	    }else {
	    	return 'F';
	    }
	}

	private Boolean isPassingGrade() {
		return calculateAverage() >= 60;
	}

	public static void main(String[] args) {
		int[] inputGrades = { 85, 90, 78, 92, 88 };
		// create object
		
		Student student = new Student("John Smith", "S12345", inputGrades);
		// using object
		System.out.println("Student: "+ student.getName() + "(ID: " + student.getId() + ")");
		System.out.println("Grades: "  + Arrays.toString(inputGrades));
		System.out.println("Average Grade: " + student.calculateAverage());
		System.out.println("Letter Grade: " + student.getLetterGrade());
		System.out.println("Passing: " + (student.isPassingGrade() ? "Yes" : "No"));

	}

}
