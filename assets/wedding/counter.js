// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  getFirestore,
  doc,
  runTransaction
} from "https://www.gstatic.com/firebasejs/12.17.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBwIE8zSzUU7vi5LfeY0vNKWz1Z-ORQ91E",
    authDomain: "wedding-website-counter.firebaseapp.com",
    projectId: "wedding-website-counter",
    storageBucket: "wedding-website-counter.firebasestorage.app",
    messagingSenderId: "157267690418",
    appId: "1:157267690418:web:a37c156b3cd7994ae85aab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const counterRef = doc(db, "wedding-stats", "website-stats");

const counterElement = document.getElementById("visitor-count");

runTransaction(db, async (transaction) => {

    const snapshot = await transaction.get(counterRef);

    let visitors = snapshot.data().visitors + 1;

    transaction.update(counterRef, {
        visitors
    });

    counterElement.textContent = visitors;

});