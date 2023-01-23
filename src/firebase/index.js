import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyDTbpt8JNJ1pED88TM9rHQ_kxWSUV0OryY",
//   authDomain: "ics4u-4917a.firebaseapp.com",
//   projectId: "ics4u-4917a",
//   storageBucket: "ics4u-4917a.appspot.com",
//   messagingSenderId: "957376152228",
//   appId: "1:957376152228:web:fc61c8351a8b735d50dc31"
// };

const firebaseConfig = {
  apiKey: "AIzaSyDihDvHKZK0V7lY5x66Cufcg4uO1QJKwhk",
  authDomain: "ics4u-ccee9.firebaseapp.com",
  projectId: "ics4u-ccee9",
  storageBucket: "ics4u-ccee9.appspot.com",
  messagingSenderId: "472077703011",
  appId: "1:472077703011:web:7ddb77a50ae821831d6556"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const firestore = getFirestore();
const storage = getStorage();

export { auth, firestore, storage }