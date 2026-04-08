console.log('JS Datastructures - Lists');
const Last = new Object({
    data: 'D',
    next: null,
    insert: function(){

    }
})

const Middle = new Object({
    data: 'C',
    next: Last,
    insert: function(value){
        const newObject = new Object({
            data: value,
            next: this.next
        })
        this.next = newObject;
    }
})

const First = new Object({
    data: 'A',
    next: Middle,
    insert: function(value){
        const newObject = new Object({
            data: value,
            next: this.next
        })
        this.next = newObject;
    }
});

const Root = new Object({
    data: '',
    next: First
}
);
console.log(Root);
Middle.insert('Middle');
First.insert('Next Next');
