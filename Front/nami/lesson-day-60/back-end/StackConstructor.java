public class StackConstructor {
    public static void main(String[] args) {
        // my stacks
        Stack myStack1 = new Stack();
        Stack myStack2 = new Stack(); 
        for (int i = 0; i < 10; i++) {
            myStack1.push(i);
        }
        
        System.out.println("Stack in myStack1:");
        for (int i = 0; i < 10; i++) {
            myStack2.push(i);
        }

        for (int i = 0; i < 10; i++) {
            System.out.println(myStack1.pop());
        }

        System.out.println("Stack in myStack2:");
    
        for (int i = 0; i < 10; i++) {
            System.out.println(myStack2.pop());
        }
    }


    static class Stack {
        private int[] stock = new int[10]; 
        private int stackHead = -1; 


        public void push(int item) {
            if (stackHead >= 9) {
                System.out.println("Stack is full");
            } else {
                stackHead++;
                stock[stackHead] = item; 
            }
        }
        public int pop() {
            if (stackHead < 0) {
                System.out.println("Stack underflow");
                return -1; 
            } else {
                int item = stock[stackHead];
                stackHead--;
                return item; 
            }
        }
    }
}
