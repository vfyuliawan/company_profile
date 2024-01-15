import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  // apiKey: "AIzaSyCuKzmSMWLY0bYiqNwCK_odKCJ7S5_bPEU",
  // authDomain: "com-pro-id.firebaseapp.com",
  // projectId: "com-pro-id",
  // storageBucket: "com-pro-id.appspot.com",
  // messagingSenderId: "1068163337727",
  // appId: "1:1068163337727:web:082d48d99449e62dcf2bca",
  // measurementId: "G-KD9ZLDMJJT"

  apiKey: "AIzaSyADActymj1VzcsuBDl3kVBMz_Tbih6wawE",
  authDomain: "company-profile-c9b59.firebaseapp.com",
  projectId: "company-profile-c9b59",
  storageBucket: "company-profile-c9b59.appspot.com",
  messagingSenderId: "789947858979",
  appId: "1:789947858979:web:46dde5e6f8da738c377196",
  measurementId: "G-PSYDWL5PC5",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const getDb = getFirestore(app);
const storage = getStorage(app);


export { app,  auth, signInWithEmailAndPassword, getDb, storage};
