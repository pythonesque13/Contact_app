import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBlaJEYFPDxN73gjFj4Koer2hkXNFcMP7Q",
  authDomain: "contactapp-3542a.firebaseapp.com",
  projectId: "contactapp-3542a",
  storageBucket: "contactapp-3542a.appspot.com",
  messagingSenderId: "996406938223",
  appId: "1:996406938223:web:4d331dd3014a7ddb169b9a"
};


 export const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app)