import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js';
import {
  getAuth,
  signInWithEmailAndPassword,
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

// Redirect to home if the user is logged in
onAuthStateChanged(auth, (user) => {
  if (user) {
    window.location.href = 'home.html';
  }
});

// Handle login form submission
const loginForm = document.getElementById('registerForm');
const loginError = document.getElementById('passwordError');

loginForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  loginError.textContent = ''; // Clear previous errors

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = 'home.html'; // Redirect to home page on successful login
    })
    .catch((e) => {
      loginError.textContent = 'Error: ' + e.message; // Show error message
    });
});

// Toggle password visibility
document.addEventListener('DOMContentLoaded', function () {
  const passwordToggleIcon = document.getElementById('hide1');

  if (passwordToggleIcon) {
    passwordToggleIcon.addEventListener('click', () => {
      const passwordInput = document.getElementById('password');
      const toggleIcon = document.getElementById('hide1');

      // Check the current type of the password field
      const isPasswordVisible = passwordInput.type === 'text';

      // Toggle the password field visibility and icon
      passwordInput.type = isPasswordVisible ? 'password' : 'text';
      toggleIcon.src = isPasswordVisible ? './img/hide.png' : './img/view.png';
    });
  } else {
    console.error('Password toggle element with ID "hide1" not found');
  }
});
const registerButtons = document.querySelectorAll('.register');

registerButtons.forEach((button) => {
  button.addEventListener('click', function () {
    window.location.href = 'signup2.html';
  });
});
const forgotButton = document.querySelector('#forgotPassword');
forgotButton.addEventListener('click', function () {
  window.location.href = 'recovery.html';
});
