import javax.security.auth.Subject;

public class JavaString {
    public static void main(String[] args) {
        String text = "This is a test text.";
        System.out.println(text);
        System.out.println(text.length());
        System.out.println(text.charAt(5));

        // create string 
        char[] letters = {'a', 'b', 'c'};
 
        String text1 = new String(letters);
        System.out.println(text1);
 
        String text2 = "Hello, World!";
        System.out.println(text2);

        String age = "9";
 
        String myText = "I am " + age + " years old.";
        System.out.println(myText);
 
        String longText = "This could have been " +
          "a very long line that would have " +
          "wrapped around. But string concatenation " +
          "prevents this.";
        System.out.println(longText);

        String text3 = "Hello World";
        System.out.println(text3.startsWith("Hel")); // true
        System.out.println(text3.endsWith("d")); // false
        System.out.println(text3.startsWith("llo",2)); // true

        String subString = "Hello";
        String subString2 = "Hello";
        String subString3 = "heLLo";
        System.out.println(subString.equals(subString2)); // true
        System.out.println(subString.equals(subString3)); // false
        System.out.println(subString.equalsIgnoreCase(subString3)); // true

        System.out.println(subString == subString2); // true
        System.out.println(subString == subString3); // false
        System.out.println(subString == new String("Hello")); // ??
        System.out.println(new String("Hello"));
        System.out.println(subString instanceof String);
        System.out.println(new String("Hello") instanceof String);

        String ex01 = "Hello";
        String ex02 = ex01;
        System.out.println("Ex01 Address" + ex01.hashCode());
        System.out.println("Ex02 Address: " + ex02.hashCode());

        String ex04 = new String("Hello");
        System.out.println("Ex04 Address: " + ex04.hashCode());

        System.out.println(ex04);
        System.out.println(ex04.hashCode());
        ex01 = "Hello World";
        System.out.println(ex01.hashCode());
        System.out.println(ex02);

        // String search

        System.out.println(ex01.indexOf("o")); // 4
        System.out.println(ex01.indexOf("a")); // -1
        System.out.println(ex04.lastIndexOf("l")); // 3

        // String substring
        text = "Hello, World!";
        System.out.println(text.substring(7)); // World!
        System.out.println(text.substring(7, 12)); // World

        // Concat
        System.out.println(text.concat(" Goodbye!"));
        System.out.println(text.replace("World", "Universe"));

        // Strip
        text = "    Hello, World!   ";
        System.out.println(text);
        System.out.println(text.strip()); // Hello, World!


        // Upper/Lower
        System.out.println(text.toLowerCase());
        System.out.println(text.toUpperCase());
        System.out.println(text);

        // Join

        text = String.join(" ", "Hello", "World", "!");
        System.out.println(text);

        System.out.println(text.isEmpty()); // false
        System.out.println(text.isBlank()); // false
        System.out.println(text.repeat(4));
    }
}