import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set, child } from "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcMVgYjXqZo6F78NGOEr_Iacn0rKYRuOY",
  authDomain: "mrsena.firebaseapp.com",
  databaseURL: "https://mrsena-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mrsena",
  storageBucket: "mrsena.firebasestorage.app",
  messagingSenderId: "579217839163",
  appId: "1:579217839163:web:6ee02c0ecb9e44aa46381e",
  measurementId: "G-LLQPV7CL27"
};
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export { ref, get, set, child };
