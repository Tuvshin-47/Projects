import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js';
import {
  getAuth,
  onAuthStateChanged,
  signOut,
} from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js';
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js';

// Initialize Firebase with your configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBJ9mSrU0IH-Ir3Ov2I2g_rNk05qvAujMQ',
  authDomain: 'nippon-fall-2024-nami.firebaseapp.com',
  projectId: 'nippon-fall-2024-nami',
  storageBucket: 'nippon-fall-2024-nami.firebasestorage.app',
  messagingSenderId: '739431408047',
  appId: '1:739431408047:web:d55cef541378d5b4014f5a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

let currentUser = null;

// Check for authentication state changes
onAuthStateChanged(auth, (user) => {
  if (user) {
    currentUser = user;
  } else {
    window.location.href = 'login.html';
  }
});

// Get the post form and message display div
const postForm = document.getElementById('postForm');
const messageDiv = document.getElementById('message');

// Handle the post form submission
postForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Check if the user is logged in
  if (!currentUser) {
    messageDiv.textContent = 'Please login to create a post';
    messageDiv.className = 'error';
    return;
  }

  const title = document.getElementById('title').value;
  const category = document.getElementById('category').value;
  const content = document.getElementById('content').value;

  // Basic form validation
  if (!title || !category || !content) {
    messageDiv.textContent = 'All fields are required';
    messageDiv.className = 'error';
    return;
  }

  try {
    // Add the post to Firestore
    await addDoc(collection(db, 'posts'), {
      title,
      category,
      content,
      userId: currentUser.uid,
      userEmail: currentUser.email,
      createdAt: serverTimestamp(),
    });

    // Display success message and reset form
    messageDiv.textContent = 'Post created successfully!';
    messageDiv.className = 'success';
    postForm.reset();

    // Redirect to the posts page after 2 seconds
    setTimeout(() => {
      window.location.href = 'posts.html';
    }, 2000);
  } catch (error) {
    // Handle errors
    messageDiv.textContent = 'Error creating post: ' + error.message;
    messageDiv.className = 'error';
  }
});

// Handle user logout
document.getElementById('logoutBtn').addEventListener('click', () => {
  signOut(auth)
    .then(() => {
      window.location.href = 'login.html';
    })
    .catch((error) => {
      console.error('Error signing out:', error);
    });
});
