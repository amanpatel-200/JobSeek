// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCi51Hns8AGkdxLuF0n5MzUrTD2BGBnHH4",
  authDomain: "jobseek-3bcf6.firebaseapp.com",
  projectId: "jobseek-3bcf6",
  storageBucket: "jobseek-3bcf6.firebasestorage.app",
  messagingSenderId: "975784004701",
  appId: "1:975784004701:web:e702237ada4e94d9de11b4",
   measurementId: "G-RTH05ST6GH",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);


