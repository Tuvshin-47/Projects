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

onAuthStateChanged(auth, (user) => {
  if (user) {
    window.location.href = 'home.html';
  }
});

const registerForm = document.getElementById('registerForm');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

registerForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  // Reset error messages
  passwordError.textContent = '';
  confirmPasswordError.textContent = '';

  // Validate password length
  if (password.length < 6) {
    passwordError.textContent = 'Password length must be longer than 6!';
    return;
  }

  // Check password and confirm password identity
  if (password !== confirmPassword) {
    confirmPasswordError.textContent = 'Password does not match!';
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      user.sendEmailVerification().then().catch().finally();
      window.location.href = 'home.html';
    })
    .catch((e) => {
      alert(e.messsage);
    });
});
document.getElementById('hide1').addEventListener('click', () => {
  const passwordInput = document.getElementById('password');
  const toggleIcon = document.getElementById('hide1');

  // Check the current type of the password field
  const isPasswordVisible = passwordInput.type === 'text';
  console.log('Password is visible:', isPasswordVisible); // Debugging step

  // Toggle the password field visibility and icon
  passwordInput.type = isPasswordVisible ? 'password' : 'text';
  toggleIcon.src = isPasswordVisible ? './img/hide.png' : './img/view.png';

  console.log('New password type:', passwordInput.type); // Debugging step
});

document.getElementById('hide2').addEventListener('click', () => {
  const passwordInput = document.getElementById('confirmPassword');
  const toggleIcon = document.getElementById('hide2');

  // Check the current type of the password field
  const isPasswordVisible = passwordInput.type === 'text';
  console.log('Password is visible:', isPasswordVisible); // Debugging step

  // Toggle the password field visibility and icon
  passwordInput.type = isPasswordVisible ? 'password' : 'text';
  toggleIcon.src = isPasswordVisible ? './img/hide.png' : './img/view.png';

  console.log('New password type:', passwordInput.type); // Debugging step
});
const signinButton = document.querySelector('.signin');

signinButton.addEventListener('click', function () {
  window.location.href = 'index.html';
});
document.addEventListener('DOMContentLoaded', function () {
  // Retrieve the email from localStorage and set it as the input value
  const savedEmail = localStorage.getItem('savedEmail');
  if (savedEmail) {
    document.getElementById('email').value = savedEmail;
  }
});
