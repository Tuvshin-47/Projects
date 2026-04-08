import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB5avKM8aNmISsK2iUwsi5KALxS7rmVO5U",
    authDomain: "icode-385408.firebaseapp.com",
    projectId: "icode-385408",
    storageBucket: "icode-385408.firebasestorage.app",
    messagingSenderId: "820758801411",
    appId: "1:820758801411:web:6aae8f8ee6c82d212bb236"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const supabaseUrl = 'https://pylfudjvjyjwpmxhgcah.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB5bGZ1ZGp2anlqd3BteGhnY2FoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY5NDM2OTcsImV4cCI6MjA1MjUxOTY5N30.Vayeizni2t_YXd8tBG9XsGa9ZxG6Heu_x1bjy3wX15w';
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

let currentUser = null;

async function handleImageUpload(file) {
    const progressElement = document.getElementById('uploadProgress');
    const loadingOverlay = document.getElementById('loadingOverlay');
    const profileImage = document.getElementById('profileImage');

    try {
        loadingOverlay.classList.add('active');
        progressElement.textContent = 'Uploading...';
        if (!file.type.startsWith('image/')) {
            throw new Error('Please upload an image file');
        }

        if (file.size > 5 * 1024 * 1024) {
            throw new Error('File size must be lower than 5MB');
        }

        const fileExt = file.name.split('.').pop();
        const fileName = `${Date.now()}_${Math.random().toString(36).substring(2, 9)}.${fileExt}`;
        console.log(fileName);

        const { data, error } = await supabase.storage
            .from('avatars')
            .upload(fileName, file);
        if (error) throw error;

        const { data: { publicUrl } } = supabase.storage
            .from('avatars')
            .getPublicUrl(fileName);

        console.log(publicUrl);
        console.log(data);

        await setDoc(doc(db, 'users', currentUser.uid), {
            avatarUrl: publicUrl,
            updatedAt: new Date()
        }, { merge: true });
        profileImage.src = publicUrl;
        progressElement.textContent = 'Upload complete!';
        setTimeout(() => {
            progressElement.textContent = '';
        }, 3000);

    } catch (error) {
        console.error('Error during image upload', error);
        progressElement.textContent = error.message || 'Upload failed';
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

// Load User Profile

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
        console.error('Error Loading Profile: ', e);
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