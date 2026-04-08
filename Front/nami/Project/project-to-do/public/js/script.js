import {
  getFirestore,
  addDoc,
  collection,
  serverTimestamp,
  onSnapshot,
  deleteDoc,
  doc,
  updateDoc,
  getDocs,
} from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js';

// firebase tohirgoo
const firebaseConfig = {
  apiKey: 'AIzaSyBJ9mSrU0IH-Ir3Ov2I2g_rNk05qvAujMQ',
  authDomain: 'nippon-fall-2024-nami.firebaseapp.com',
  projectId: 'nippon-fall-2024-nami',
  storageBucket: 'nippon-fall-2024-nami.firebasestorage.app',
  messagingSenderId: '739431408047',
  appId: '1:739431408047:web:51702e7304776300014f5a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const todoListUl = document.getElementById('todo-list');
const todoInput = document.getElementById('todoInput');
const addButton = document.getElementById('addButton');
const ulBackground = document.getElementsByClassName('ul-background');
const body = document.body;

// ehende tovchluuriig nuuh
addButton.style.display = 'none';

// herev inputd ym bichigdvel button iig haruulah
todoInput.addEventListener('input', () => {
  addButton.style.display =
    todoInput.value.trim() !== '' ? 'inline-block' : 'none';
});

// button darah uyd click hj daragdana
addButton.addEventListener('click', () => {
  addTodo();
});

async function addTodo() {
  const inputValue = todoInput.value.trim();
  if (!inputValue) return;

  try {
    await addDoc(collection(db, 'todos'), {
      title: inputValue,
      complete: false,
      createdAt: serverTimestamp(),
    });
  } catch (error) {
    console.error('Error adding document: ', error);
  }

  todoInput.value = ''; //herev input dotorh iim bval
  addButton.style.display = 'none'; // buttoniig ahin nuuh
}

// Listen for existing todos in real-time
const existingTodos = collection(db, 'todos');

onSnapshot(existingTodos, (snapshot) => {
  const fragment = document.createDocumentFragment();
  const todoCount = snapshot.size; // Check the total number of todos in the collection

  if (todoCount > 0) {
    ulBackground[0].style.display = 'none'; // Hide background
    todoListUl.style.display = 'inline-block'; // Show the todo list
  } else {
    ulBackground[0].style.display = 'flex'; // Show background
    todoListUl.style.display = 'none'; // Hide the todo list
  }

  todoListUl.innerHTML = ''; // Clear the list to avoid duplicates
  let allTodoNumber = 0;
  let completedCount = 0; // Counter for completed todos

  snapshot.forEach((doc) => {
    const todoData = doc.data();
    allTodoNumber++;
    if (todoData.complete) {
      completedCount++; // Increment counter for completed todos
    }

    const todoLi = document.createElement('li');
    todoLi.classList.add('todo-item');
    todoLi.id = doc.id; // Add an ID to easily find this item later
    todoLi.style.display = 'flex';
    todoLi.style.justifyContent = 'space-between';
    todoLi.style.width = '578px';
    todoLi.style.height = '51px';
    todoLi.style.borderRadius = '8px';
    todoLi.style.margin = '15px auto 0 auto';
    todoLi.style.border = '1px solid rgba(33, 33, 33, 0.32)';

    const textContainer = document.createElement('div');
    textContainer.style.flexGrow = '1';
    textContainer.style.textAlign = 'left';
    textContainer.style.fontSize = '18px';
    textContainer.textContent = todoData.title;

    todoLi.appendChild(textContainer);

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.style.width = '20px';
    checkbox.style.height = '20px';
    checkbox.style.marginLeft = '12px';
    checkbox.style.marginRight = '4px';
    checkbox.checked = todoData.complete;

    if (todoData.complete) {
      textContainer.style.color = 'rgba(33, 33, 33, 0.32)';
      textContainer.style.textDecoration = 'line-through';
    }

    checkbox.addEventListener('change', () => {
      const completed = checkbox.checked;
      textContainer.style.textDecoration = completed ? 'line-through' : 'none';
      textContainer.style.color = completed
        ? 'rgba(33, 33, 33, 0.32)'
        : 'rgba(33, 33, 33, 0.87)';
      updateTodoCompletion(doc.id, completed);
    });

    todoLi.prepend(checkbox);

    const deleteButton = document.createElement('img');
    deleteButton.classList.add('delete-button');
    deleteButton.src = './image/ic_round-close.svg';
    deleteButton.style.cursor = 'pointer';

    deleteButton.addEventListener('click', () => {
      deleteTodo(doc.id);
    });

    deleteButton.addEventListener('mouseover', () => {
      todoLi.style.backgroundColor = 'rgba(33, 33, 33, 0.08)';
    });

    deleteButton.addEventListener('mouseout', () => {
      todoLi.style.backgroundColor = '';
    });

    todoLi.appendChild(deleteButton);

    fragment.appendChild(todoLi); // Append todo item to the fragment
  });

  // Append all todos in the fragment to the list at once
  todoListUl.appendChild(fragment);

  // Create or update the todoComplete element
  let todoComplete = document.querySelector('#todoComplete');
  if (!todoComplete) {
    todoComplete = document.createElement('p');
    todoComplete.id = 'todoComplete';
    todoComplete.style.position = 'absolute';
    todoComplete.style.fontSize = '17px';
    todoComplete.style.bottom = '0';
    todoComplete.style.right = '0';
    todoComplete.style.padding = '24px 20px';
    todoListUl.style.position = 'relative'; // Ensure the container is positioned for the absolute child
    if (body.classList.contains('dark')) {
      todoComplete.style.color =
        'var(--dark-gray-87-opacity, rgba(33, 33, 33, 0.87))';
    } else {
      todoComplete.style.color =
        'var(--white-87-opacity, rgba(255, 255, 255, 0.87));';
    }
    todoListUl.appendChild(todoComplete);
  }
  // Update the text content of the todoComplete element
  todoComplete.textContent = `${completedCount}/${allTodoNumber} todos completed`;
});

// Function to delete a todo
async function deleteTodo(todoId) {
  try {
    await deleteDoc(doc(db, 'todos', todoId));
    console.log(`Todo with ID ${todoId} deleted successfully.`);

    // Check if there are any todos left in Firestore
    const snapshot = await getDocs(existingTodos);
    if (snapshot.empty) {
      ulBackground[0].style.display = 'flex'; // Show the background when no todos
      todoListUl.style.display = 'none'; // Hide the todo list when empty
    }
  } catch (error) {
    console.error('Error deleting document: ', error);
  }
}

// Firestore-д дууссан статусыг шинэчлэх функц
async function updateTodoCompletion(todoId, isComplete) {
  try {
    await updateDoc(doc(db, 'todos', todoId), { complete: isComplete });
    console.log(`Todo with ID ${todoId} updated successfully.`);
  } catch (error) {
    console.error('Error updating document: ', error);
  }
}
