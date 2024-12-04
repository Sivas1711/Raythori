// Firebase setup (if needed for actual login)
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js';
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD2niq-vHFMT8fkEyy0bvC8LMhXIWGb7qs",
    authDomain: "mini-project-d692a.firebaseapp.com",
    projectId: "mini-project-d692a",
    storageBucket: "mini-project-d692a.firebasestorage.app",
    messagingSenderId: "871464611233",
    appId: "1:871464611233:web:557ad9fd875ab45ee7afe0",
    measurementId: "G-61QSKZR0Z2"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Get login form
const loginForm = document.querySelector('form');

// Add event listener for form submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();  // Prevent the default form submission

    // Get email and password input values
    const email = loginForm.querySelector('input[type="email"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;

    // Firebase login authentication
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            // Show success message on successful login
            alert('Successfully logged in!');
            
            // Redirect to homepage or dashboard after successful login
            window.location.href = '../home.html';  // Modify according to your homepage URL
        })
        .catch((error) => {
            // Show error message in case of login failure
            alert("Error during login: " + error.message);
        });
});
