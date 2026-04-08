import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js';
import {
  getAuth,
  onAuthStateChanged,
  signOut,
} from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js';
import {
  getFirestore,
  collection,
  query,
  where,
  orderBy,
  getDocs,
} from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js';
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
const db = getFirestore(app);

let currentUser = null;

onAuthStateChanged(auth, async (user) => {
  if (user) {
    currentUser = user;
    await loadPosts();
  } else {
    window.location.href = 'login.html';
  }
});

async function loadPosts() {
  const postsContainer = document.getElementById('postsContainer');

  try {
    const q = query(
      collection(db, 'posts'),
      where('userId', '==', currentUser.uid),
      orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      postsContainer.innerHTML = `<div class="no-posts">No posts yet. Create your first post!</div>`;
      return;
    }
    postsContainer.innerHTML = '';
    querySnapshot.forEach((doc) => {
      const post = doc.data();
      const date = post.createdAt
        ? new Date(post.createdAt.seconds * 1000)
        : new Date();

      const postElement = document.createElement('div');
      postElement.className = 'post';
      postElement.innerHTML = `
            <div class="post-header">
                <div>
                    <h2 class="post-title"${post.title}</h2>
                    <span class="post-category">${post.category}</span>
                    <div class="post-date">${date.toLocaleDateString()}</div>
                </div>
            </div>
            <div class="post-content">${post.content}</div>
            `;
      postsContainer.appendChild(postElement);
    });
  } catch (error) {
    console.log('Error loading posts: ', error);
    postsContainer.innerHTML = `<div class="error">Error loading posts. Please try again later.</div>`;
  }
}

//Handle logout
document.getElementById('logoutBtn').addEventListener('click', () => {
  signOut(auth)
    .then(() => {
      window.location.href = 'login.html';
    })
    .catch((error) => {
      console.log('Error signing out: ', error);
    });
});
