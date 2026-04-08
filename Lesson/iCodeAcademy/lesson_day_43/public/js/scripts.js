import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getFirestore, addDoc, collection, serverTimestamp, onSnapshot } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyB5avKM8aNmISsK2iUwsi5KALxS7rmVO5U",
    authDomain: "icode-385408.firebaseapp.com",
    projectId: "icode-385408",
    storageBucket: "icode-385408.firebasestorage.app",
    messagingSenderId: "820758801411",
    appId: "1:820758801411:web:c0d7ecef47113d6b2bb236"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const todoListUl = document.getElementById('todo-list');
const todoInput = document.getElementById('todoInput');
const addButton = document.getElementById('addButton');

addButton.addEventListener('click', () => {
    addTodo()
});
// add to do when button is clicked
async function addTodo() {
    // Render TODO on DOM
    const inputValue = todoInput.value;
    const todoLi = document.createElement('li');
    todoLi.textContent = inputValue;
    todoListUl.appendChild(todoLi);

    // ADD todo data into Firebase
    if(inputValue !== ''){
        const collectionTodo = await addDoc(collection(db, 'todos'), {
            title: inputValue,
            complete: false,
            createdAt: serverTimestamp()
        });
    }
    todoInput.value  = '';
}

// show already existing data on todo list

const existingTodos = collection(db, 'todos');

onSnapshot(existingTodos, (snapshot) => {
    const changes = snapshot.docChanges();

    changes.forEach((c) => {
        console.log(c.doc.data());
        const todoLi = document.createElement('li');
        todoLi.textContent = ;
        todoListUl.appendChild(todoLi);
    });
})

