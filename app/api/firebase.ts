// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADActymj1VzcsuBDl3kVBMz_Tbih6wawE",
  authDomain: "company-profile-c9b59.firebaseapp.com",
  projectId: "company-profile-c9b59",
  storageBucket: "company-profile-c9b59.appspot.com",
  messagingSenderId: "789947858979",
  appId: "1:789947858979:web:46dde5e6f8da738c377196",
  measurementId: "G-PSYDWL5PC5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);