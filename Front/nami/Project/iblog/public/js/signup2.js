import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js';

const firebaseConfig = {
  apiKey: 'AIzaSyBJ9mSrU0IH-Ir3Ov2I2g_rNk05qvAujMQ',
  authDomain: 'nippon-fall-2024-nami.firebaseapp.com',
  projectId: 'nippon-fall-2024-nami',
  storageBucket: 'nippon-fall-2024-nami.firebasestorage.app',
  messagingSenderId: '739431408047',
  appId: '1:739431408047:web:86763400e52a9e5f014f5a',
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const registerForm = document.getElementById('registerForm');
const emailInput = document.getElementById('email');

registerForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission

  const email = emailInput.value;
  if (isValidEmail(email)) {
    localStorage.setItem('savedEmail', email); // Store the email in localStorage
    window.location.href = 'signup1.html'; // Redirect to signup1.html after successful email validation
  } else {
    alert('Please enter a valid email address');
  }
});

function isValidEmail(email) {
  // Simple email validation using a regular expression
  const emailPattern = /\S+@\S+\.\S+/;
  return emailPattern.test(email);
}

const signinButton = document.querySelector('.signin');
signinButton.addEventListener('click', function () {
  window.location.href = 'index.html';
});
