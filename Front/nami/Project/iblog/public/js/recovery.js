import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js';
import {
  getAuth,
  sendPasswordResetEmail,
} from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js';

// 🔥 Firebase Configuration (Replace with your credentials)
const firebaseConfig = {
  apiKey: 'AIzaSyBJ9mSrU0IH-Ir3Ov2I2g_rNk05qvAujMQ',
  authDomain: 'nippon-fall-2024-nami.firebaseapp.com',
  projectId: 'nippon-fall-2024-nami',
  storageBucket: 'nippon-fall-2024-nami.firebasestorage.app',
  messagingSenderId: '739431408047',
  appId: '1:739431408047:web:86763400e52a9e5f014f5a',
};

// 🔥 Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 🔹 Handle Password Reset Request
document.addEventListener('DOMContentLoaded', function () {
  const recoveryForm = document.getElementById('registerForm');
  const emailInput = document.getElementById('email');
  const messageDiv = document.createElement('p'); // Create a message display
  messageDiv.style.marginTop = '10px';
  messageDiv.style.fontWeight = 'bold';
  recoveryForm.appendChild(messageDiv);

  recoveryForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = emailInput.value.trim();

    if (!email) {
      messageDiv.textContent = '❌ Та и-мэйл хаягаа оруулна уу!';
      messageDiv.style.color = 'red';
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        window.location.href = 'verify.html';
      })
      .catch((error) => {
        console.error('Error:', error.message);
        messageDiv.textContent =
          '❌ Энэ хаяг бүртгэлгүй байна:' + error.message;
        messageDiv.style.color = 'red';
      });
  });
});
const signinButton = document.querySelector('.signin');
signinButton.addEventListener('click', function () {
  window.location.href = 'index.html';
});
const registerButtons = document.querySelectorAll('.register');
registerButtons.forEach((button) => {
  button.addEventListener('click', function () {
    window.location.href = 'signup2.html';
  });
});
