import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";


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
    if (user) {
        window.location.href = "home.html";
    }
});

const loginForm = document.getElementById('loginForm');
const loginError = document.getElementById('loginError');

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    loginError.textContent = '';

    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            window.location.href = "home.html";
        })
        .catch((e) => {
            loginError.textContent = e.message;
        });
});