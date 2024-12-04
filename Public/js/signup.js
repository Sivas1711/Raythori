// Firebase configuration (replace these with your own Firebase project's credentials)
const firebaseConfig = {
    apiKey: "AIzaSyD2niq-vHFMT8fkEyy0bvC8LMhXIWGb7qs",
    authDomain: "mini-project-d692a.firebaseapp.com",
    projectId: "mini-project-d692a",
    storageBucket: "mini-project-d692a.firebasestorage.app",
    messagingSenderId: "871464611233",
    appId: "1:871464611233:web:557ad9fd875ab45ee7afe0",
    measurementId: "G-61QSKZR0Z2"
  };
  

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Handle the form submission for signup
const signupForm = document.querySelector('#signup-form form');  // Selecting the form
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();  // Prevent the default form submission

    const fullName = signupForm.querySelector('#full-name').value;  // Get the full name
    const email = signupForm.querySelector('#email').value;        // Get the email
    const password = signupForm.querySelector('#password').value;  // Get the password

    // Create the user with email and password
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            // Here you can also add the full name or any additional info to the user's profile, if needed.
            user.updateProfile({
                displayName: fullName
            }).then(() => {
                // Successfully signed up, you can redirect the user to another page
                window.location.href = "login.html";  // Redirect to the login page or dashboard
            }).catch((error) => {
                console.error("Error updating profile:", error);
                alert("Error during signup: " + error.message);
            });
        })
        .catch((error) => {
            // If there's an error during signup, show it to the user
            console.error("Error signing up:", error);
            alert("Error during signup: " + error.message);
        });
});
