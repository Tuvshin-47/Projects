import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js';
import {
  getAuth,
  onAuthStateChanged,
  signOut,
} from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js';
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-storage.js';

// Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBJ9mSrU0IH-Ir3Ov2I2g_rNk05qvAujMQ',
  authDomain: 'nippon-fall-2024-nami.firebaseapp.com',
  projectId: 'nippon-fall-2024-nami',
  storageBucket: 'nippon-fall-2024-nami.appspot.com',
  messagingSenderId: '739431408047',
  appId: '1:739431408047:web:d55cef541378d5b4014f5a',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

let currentUser = null;

onAuthStateChanged(auth, async (user) => {
  if (user) {
    currentUser = user;
    displayUserInfo();
    await loadUserProfile();
    await loadUserStats();
  } else {
    window.location.href = 'index.html';
  }
});

function displayUserInfo() {
  const profileEmail = document.getElementById('profileEmail');
  const profileAvatar = document.getElementById('profileAvatar');

  profileEmail.textContent = currentUser.email;
  profileAvatar.textContent = currentUser.email[0].toUpperCase();
}

// Logout
document.getElementById('logoutBtn').addEventListener('click', () => {
  signOut(auth)
    .then(() => {
      window.location.href = 'index.html';
    })
    .catch((error) => {
      console.error('Error during logout:', error);
      alert('Logout failed. Please try again.');
    });
});

// Dropdown menu functionality
document.addEventListener('DOMContentLoaded', function () {
  const dropbtns = document.querySelectorAll('.dropbtn');

  dropbtns.forEach((btn) => {
    btn.addEventListener('click', function (event) {
      event.stopPropagation();
      const dropdownContent = this.nextElementSibling;
      dropdownContent.classList.toggle('active');

      document
        .querySelectorAll('.dropdown-content.active')
        .forEach((content) => {
          if (content !== dropdownContent) {
            content.classList.remove('active');
          }
        });
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', function () {
    document.querySelectorAll('.dropdown-content.active').forEach((content) => {
      content.classList.remove('active');
    });
  });
});
