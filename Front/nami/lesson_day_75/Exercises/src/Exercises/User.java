package Exercises;

public class User {
	private String name;
	private String email;
	private int age;
	//constructor
	public User(String inputName, String InputEmail, int InputAge) {
		this.name=inputName;
		this.email=InputEmail;
		this.age= InputAge;
	}
	//name
	public String getName() {
		return this.name=name ;
		
	}
	public void setName(String name) {
		this.name=name;
	}
	//Email
	public String getEmail() {
		return this.email=email ;
		
	}
	public void setEmail(String email ){
		this.email=email;
	}
	public int getAge() {
		return this.age=age ;
		
	}
	public void setAge(int age){
		this.age=age;
	}


}
