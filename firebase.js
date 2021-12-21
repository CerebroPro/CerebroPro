import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWg34HZfJF31eQIL453__z7tz4RXk1_oQ",
  authDomain: "cerebropro-3f679.firebaseapp.com",
  projectId: "cerebropro-3f679",
  storageBucket: "cerebropro-3f679.appspot.com",
  messagingSenderId: "899877347621",
  appId: "1:899877347621:web:2603a5578f2cb6da097acc",
  measurementId: "G-S7F0P6FHFL"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
