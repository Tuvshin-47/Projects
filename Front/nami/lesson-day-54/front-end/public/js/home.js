import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js';
import {
  getAuth,
  signOut,
  onAuthStateChanged,
} from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js';

const firebaseConfig = {
  apiKey: 'AIzaSyBJ9mSrU0IH-Ir3Ov2I2g_rNk05qvAujMQ',
  authDomain: 'nippon-fall-2024-nami.firebaseapp.com',
  projectId: 'nippon-fall-2024-nami',
  storageBucket: 'nippon-fall-2024-nami.firebasestorage.app',
  messagingSenderId: '739431408047',
  appId: '1:739431408047:web:d55cef541378d5b4014f5a',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
    document.getElementById('userEmail').textContent = user.email;
  } else {
    window.location.href = 'login.html';
  }
});

const logoutButton = document.getElementById('logoutBtn');

logoutButton.addEventListener('click', function () {
  signOut(auth)
    .then(() => {
      window.location.href = 'login.html';
    })
    .catch((e) => {
      console.error('Error during sign out', e);
    });
});
