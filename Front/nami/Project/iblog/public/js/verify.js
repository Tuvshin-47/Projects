import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js';
import {
  getAuth,
  verifyPasswordResetCode,
  confirmPasswordReset,
} from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js';

// 🔥 Firebase Configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBJ9mSrU0IH-Ir3Ov2I2g_rNk05qvAujMQ',
  authDomain: 'nippon-fall-2024-nami.firebaseapp.com',
  projectId: 'nippon-fall-2024-nami',
  storageBucket: 'nippon-fall-2024-nami.firebasestorage.app',
  messagingSenderId: '739431408047',
  appId: '1:739431408047:web:86763400e52a9e5f014f5a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const verifyForm = document.getElementById('verifyForm');
const verificationInput = document.getElementById('verificationCode');
const message = document.getElementById('message');
const resendButton = document.getElementById('resendCode');

// 🔹 Handle Verification Code Submission
verifyForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const code = verificationInput.value.trim();

  if (!code) {
    message.textContent = '❌ Please enter the verification code!';
    message.style.color = 'red';
    return;
  }

  // Verify the code entered by the user
  verifyPasswordResetCode(auth, code)
    .then(() => {
      message.textContent =
        '✅ Verification successful! You can now reset your password.';
      message.style.color = 'green';

      // Redirect to password reset page (for the user to set a new password)
      setTimeout(() => {
        window.location.href = 'resetPassword.html'; // Link to your password reset page
      }, 2000);
    })
    .catch((error) => {
      message.textContent = '❌ Invalid verification code!';
      message.style.color = 'red';
    });
});

// 🔹 Resend Verification Code
resendButton.addEventListener('click', function () {
  const email = localStorage.getItem('emailForSignIn');

  if (!email) {
    message.textContent = '❌ No registered email found!';
    message.style.color = 'red';
    return;
  }

  // Send a new password reset email (this will include a new verification code)
  sendPasswordResetEmail(auth, email)
    .then(() => {
      message.textContent =
        '✅ A new verification code has been sent to your email!';
      message.style.color = 'green';
    })
    .catch((error) => {
      message.textContent = '❌ Error: ' + error.message;
      message.style.color = 'red';
    });
});
