// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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

onAuthStateChanged(auth, (user) => {
  if (user) {
    window.location.href = 'home..html';
  }
});

const registerForm = document.getElementById('register');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

registerForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  // reset error messages
  passwordError.textContent = '';
  confirmPasswordError.textContent = '';

  // validate password length
  if (password.length < 6) {
    passwordError.textContent = 'Password length must be longer than 6';
    return;
  }

  //  Check password and confirm password identity
  if (password !== confirmPassword) {
    confirmPasswordError.textContent = 'Password does not match';
    return;
  }
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = 'home.html';
    })
    .catch((e) => {
      alert(e.message);
    });
});
