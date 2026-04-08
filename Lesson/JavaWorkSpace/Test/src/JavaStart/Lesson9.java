package JavaStart;


/*class Account{
	//Gatter, setter ashiglahq bol enluu shuud handaj bolohq
	private double balance;
	
	//Constructor
	public Account(double balance) {
		this.balance = balance;
	}
	
	
	//Gatter
	public double getBalance() {
		return balance;
	}
	
	//Setter
	public void setBalance(double newBalance) {
		if (newBalance >= 0) {
			this.balance = newBalance;
		} else {
			System.out.println("Алдаа: Үлдэгдэл хасах утгатай байж болохгүй!");
		}	
	}
}
*/
class Student {
private double score;
    

    public Student(double score) {
        this.score = score;
    }
    
    public double getScore() {
        return score;
    }
    
    // 2. Логикийг засах
    public void setScore(double newScore) {

        if (newScore >= 0 && newScore <= 100) { 
            this.score = newScore;
        } else {
            System.out.println("Алдаа: Дүн 0-ээс 100-ын хооронд байх ёстой!");
        }
    }
}


public class Lesson9 {
	public static void main(String[] args) {
		Student newStudent = new Student(10);
		
		newStudent.setScore(84);
		System.out.println("Таны дүн " + newStudent.getScore());
		
	}
	
	
	
	
	/*
	public static void main(String[] args) {
		Account myAcc = new Account(0);
		
	myAcc.setBalance(2000.0);
	System.out.println("Your Bank Account has: " + myAcc.getBalance());
	}
*/
}
