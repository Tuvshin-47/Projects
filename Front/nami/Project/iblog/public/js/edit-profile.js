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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

let currentUser = null;

// Listen for authentication state changes
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

// Function to display user info
function displayUserInfo() {
  const profileEmail = document.getElementById('profileEmail');
  const profileAvatar = document.getElementById('profileAvatar');

  if (profileEmail) profileEmail.textContent = currentUser.email;
  if (profileAvatar)
    profileAvatar.textContent = currentUser.email[0].toUpperCase();
}

// Function to load user profile from Firestore
async function loadUserProfile() {
  if (!currentUser) return;

  const userDocRef = doc(db, 'users', currentUser.uid);
  const userDoc = await getDoc(userDocRef);

  if (userDoc.exists()) {
    const userData = userDoc.data();
    const profileAvatar = document.getElementById('profileAvatar');

    if (userData.avatar) {
      // Option 1: Using <img> tag method
      const img = document.createElement('img');
      img.src = userData.avatar;
      img.alt = 'Profile Avatar';
      img.style.width = '100px';
      img.style.height = '100px';
      img.style.borderRadius = '50%';
      profileAvatar.innerHTML = '';
      profileAvatar.appendChild(img);
    }
  } else {
    console.log('No user profile found.');
  }
}

// Function to load user statistics from Firestore
async function loadUserStats() {
  if (!currentUser) return;

  const statsQuery = query(
    collection(db, 'userStats'),
    where('uid', '==', currentUser.uid)
  );
  const statsSnapshot = await getDocs(statsQuery);

  statsSnapshot.forEach((doc) => {
    console.log('User Stat:', doc.data());
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const logoutButton = document.getElementById('logoutButton');
  if (logoutButton) {
    logoutButton.addEventListener('click', async () => {
      await signOut(auth);
      window.location.href = 'index.html';
    });
  }

  const proInformationDivs = document.getElementsByClassName('pro-information');
  const profilInf = document.getElementById('profile-inf');
  const profilePic = document.getElementById('profile-pic');
  const inputFile = document.getElementById('input-file');

  inputFile.onchange = function () {
    profilePic.src = URL.createObjectURL(inputFile.files[0]);
  };
  Array.from(proInformationDivs).forEach((div) => {
    div.addEventListener('click', function () {
      div.style.borderBottom = '2px solid var(--iblog-primary, #e86b02)';
      profilInf.style.display = 'block';
    });
  });
});
document.addEventListener('DOMContentLoaded', function () {
  // Retrieve the email from localStorage and set it as the input value
  const savedEmail = localStorage.getItem('savedEmail');
  if (savedEmail) {
    document.getElementById('email').value = savedEmail;
  }
});
