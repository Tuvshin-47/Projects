console.log('List Datastructure with Class');
// нэг ширхэг node буюу block(blockchain)
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class List {
    constructor(){
        this.head = null;
    }
    // Class methods
    insert (value) {
        const node = new Node(value);
        if(this.head === null){
            this.head = node;
        } else {
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }

    }
}


// Node A
const newList = new List();
console.log(newList);
newList.insert('A');
console.log(newList);
newList.insert('B');

const myArray = [];
myArray.push('A');
console.log(myArray);
myArray.push('B');
console.log(myArray);