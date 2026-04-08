// Difficult Exercise
// Stack class
// Энэхүү класс нь дотроо 10 integer утга авдаг stock гэдэг хувийн array private member-тэй байх ёстой.
// Конструктор дотроо эхлээд stackHead гэдэг private member-ийн утгыг нь -1 гэж тодорхойлж өгөөрэй.
// энэхүү класс нь push, pop гэдэг 2 төрлийн функцтэй
// push функц нь item гэдэг параметр авна. Хэрвээ энэ функцыг дуудвал шинэ item parameter-ийг 
// stock гэдэг array дотроо нэмнэ. Гэхдээ тухайн stackHead-ийн утгыг нь нэгээр нэмээд index болгож тухайн
// item-ийг хадгална. Хэрвээ stackHead нь 9-тэй тэнцүү болон их бол "Stack is full" гэдэг мессэж хэвлэнэ.
// pop функц нь хэрвээ stackHead нь 0-оос бага байвал "Stack underflow" гэж хэвлэнэ. Гэхдээ энэхүү 
// функцыг зөвхөн дуудах үед энэ хэвлэгдэнэ. Тэгээд 0-ийг буцаана.
// бусад үед stock гэдэг array-гийн сүүлчийн элементийг устгана.

class TestStack {
        public static void main(String[] args) {
                Stack myStack1 = new Stack(); // class instance, object
                Stack myStack2 = new Stack();

                for (int i = 0; i < 10; i++) {
                        myStack1.push(i);
                }
                for (int i = 0; i < 10; i++) {
                        myStack2.push(i);
                }
                System.out.println("Stack in myStack1");
                for (int i = 0; i < 10; i++) {
                        System.out.println(myStack1.pop());
                }
                System.out.println("Stack in myStack2");
                for (int i = 0; i < 10; i++) {
                        System.out.println(myStack2.pop());
                }

                hello();

                System.out.println(Stack.calculateMath(5, 10)); //
        }

        static void hello() {
                System.out.println("Hello");
        }
}

class Stack {
        private int[] stock = new int[10];
        private int stackHead;

        Stack() {
                stackHead = -1;
        }

        void push(int item) {
                if (stackHead >= 9) {
                        System.out.println("Stack is full");
                } else {
                        // stackHead++;
                        stock[++stackHead] = item;
                }
        }

        int pop() {
                if (stackHead < 0) {
                        System.out.println("Stack overflow");
                        return 0;
                } else {
                        return stock[stackHead--];
                }
        }

        static int calculateMath(int a, int b){
                return a + b;
        }
}

// Stack in myStack1;

// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0