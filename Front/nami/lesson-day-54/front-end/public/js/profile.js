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
  collection,
  query,
  where,
  getDocs,
} from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js';
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-storage.js';

// Firebase Config
const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

let currentUser = null;

onAuthStateChanged(auth, async (user) => {
  if (user) {
    currentUser = user;
    displayUserInfo();
    await loadUserProfile();
    await loadUserStats();
  } else {
    window.location.href = 'login.html';
  }
});

async function displayUserInfo() {
  document.getElementById('email').value = currentUser.email;
  const avatarRef = ref(storage, `avatars/${currentUser.uid}`);
  try {
    const avatarUrl = await getDownloadURL(avatarRef);
    document.getElementById('profileAvatar').src = avatarUrl;
  } catch {
    document.getElementById('profileAvatar').src = 'default-avatar.png';
  }
}

async function loadUserProfile() {
  const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
  if (userDoc.exists()) {
    const userData = userDoc.data();
    document.getElementById('displayName').value = userData.displayName || '';
    document.getElementById('phoneNumber').value = userData.phoneNumber || '';
    document.getElementById('bio').value = userData.bio || '';
  }
}

document.getElementById('profileForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  await setDoc(
    doc(db, 'users', currentUser.uid),
    {
      displayName: document.getElementById('displayName').value,
      phoneNumber: document.getElementById('phoneNumber').value,
      bio: document.getElementById('bio').value,
    },
    { merge: true }
  );
  alert('Profile Updated!');
});

document
  .getElementById('avatarUpload')
  .addEventListener('change', async (e) => {
    const file = e.target.files[0];
    const storageRef = ref(storage, `avatars/${currentUser.uid}`);
    await uploadBytes(storageRef, file);
    const avatarUrl = await getDownloadURL(storageRef);
    document.getElementById('profileAvatar').src = avatarUrl;
  });

document.getElementById('logoutBtn').addEventListener('click', () => {
  signOut(auth).then(() => (window.location.href = 'login.html'));
});
