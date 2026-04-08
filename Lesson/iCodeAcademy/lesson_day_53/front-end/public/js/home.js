import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

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
        document.getElementById('userEmail').textContent = user.email;
    } else {
        window.location.href = "login.html";
    }
});

const logoutButton = document.getElementById('logoutBtn');

logoutButton.addEventListener('click', function () {
    signOut(auth).then(() => {
        window.location.href = "login.html";
    }).catch((e) => {
        console.error('Error during sign out', e);
    })
});
