import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB5avKM8aNmISsK2iUwsi5KALxS7rmVO5U",
  authDomain: "icode-385408.firebaseapp.com",
  projectId: "icode-385408",
  storageBucket: "icode-385408.firebasestorage.app",
  messagingSenderId: "820758801411",
  appId: "1:820758801411:web:264ecd81ce331dfd2bb236"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if(user) {
    window.location.href = "home.html";
  }
})

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
    confirmPasswordError.textContent = "Password does not match!";
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "home.html";
    }).catch((e) => {
      alert(e.messsage);
    })
})
