// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

function database() {
 // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyAHJ1XdW8h1S2AAs92bWOgnl5OjtaM24qU",
        authDomain: "reactapp-6b3dd.firebaseapp.com",
        databaseURL: "https://reactapp-6b3dd-default-rtdb.firebaseio.com",
        projectId: "reactapp-6b3dd",
        storageBucket: "reactapp-6b3dd.appspot.com",
        messagingSenderId: "488864764882",
        appId: "1:488864764882:web:0a409f11bf8d7552c62e0b"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
}

export default database;