import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js';
import {
  getAuth,
  onAuthStateChanged,
} from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js';
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
} from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js';

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
const db = getFirestore(app);

const supabaseUrl = 'https://ooiyvaguhkcocjdcrjlk.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9vaXl2YWd1aGtjb2NqZGNyamxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg3Mjg0MDAsImV4cCI6MjA1NDMwNDQwMH0.Cb4O19k8-RYNWiTjoNRqAZGBEHNO7UDYRozmHlJu_IU';
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

let currentUser = null;

async function handleImageUpload(file) {
  const progressElement = document.getElementById('uploadProgress');
  const loadingOverlay = document.getElementById('loadingOverlay');
  const profileImage = document.getElementById('profileImage');

  try {
    loadingOverlay.classList.add('active');
    progressElement.textContent = 'Uploading..';
    if (!file.type.startsWith('image/')) {
      throw new error('Please upload an image file');
    }
    if (file.size > 5 * 1024 * 1024) {
      throw new error('File size must be lower tham 5MB');
    }
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}_${Math.random()
      .toString(36)
      .substring(2, 9)}.${fileExt}`;
    console.log(fileName);

    const { data, error } = await supabase.storage
      .from('avatars')
      .upload(fileName, file);
    if (error) throw error;

    const {
      data: { publicUrl },
    } = supabase.storage.from('avatars').getPublicUrl(fileName);
    console.log(publicUrl);

    await setDoc(
      doc(db, 'users', currentUser.uid),
      {
        avatarUrl: publicUrl,
        updateAt: new Date(),
      },
      { merge: true }
    );

    profileImage.src = publicUrl;
    progressElement.textContent = 'Upload complete!';
    setTimeout(() => {
      progressElement.textContent = '';
    }, 3000);
  } catch (error) {
    console.error('Error during image upload', error);
    progressElement.textContent = error.message || 'Upload FAILED!';
    setTimeout(() => {
      progressElement.textContent = '';
    }, 3000);
  } finally {
    loadingOverlay.classList.remove('active');
  }
}

document.getElementById('imageUpload').addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    handleImageUpload(file);
  }
});

// load user Profile

async function loadUserProfile() {
  try {
    const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
    if (userDoc.exists()) {
      const userData = userDoc.data();
      if (userData.avatarUrl) {
        document.getElementById('profileImage').src = userData.avatarUrl;
      }
    }
  } catch (e) {
    console.error('Error loading Profiles:', e);
  }
}

onAuthStateChanged(auth, async (user) => {
  if (user) {
    currentUser = user;
    document.getElementById('profileEmail').textContent = user.email;
    await loadUserProfile();
  } else {
    window.location.href = 'login.html';
  }
});
