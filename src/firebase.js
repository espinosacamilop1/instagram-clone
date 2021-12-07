import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCIwN84uwL5FBfrdoD7CSDCw1bUT1BFBfA",
  authDomain: "instagram-clone-3d846.firebaseapp.com",
  projectId: "instagram-clone-3d846",
  storageBucket: "instagram-clone-3d846.appspot.com",
  messagingSenderId: "219226268250",
  appId: "1:219226268250:web:da85cc750d8037840b6e63",
  measurementId: "G-6SSTHLN01Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default getFirestore();