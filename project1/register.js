import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyArPROthfdsTjj52yEGvTuMtolQ_ORL5M8",
  authDomain: "bookstore-594e7.firebaseapp.com",
  projectId: "bookstore-594e7",
  storageBucket: "bookstore-594e7.appspot.com",
  messagingSenderId: "891305078621",
  appId: "1:891305078621:web:5d4c840c64d846385e02b4",
  measurementId: "G-193D7VHVBX"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("registerBtn").addEventListener("click", () => {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const msg = document.getElementById("message");

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      msg.style.color = "green";
      msg.textContent = "Registration successful! Redirecting...";
      setTimeout(() => {
        window.location.href = "login.html";
      }, 1000);
    })
    .catch((error) => {
      msg.style.color = "red";
      msg.textContent = "Error: " + error.message;
    });
});
