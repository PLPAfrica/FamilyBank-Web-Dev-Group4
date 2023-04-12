import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

    apiKey: "AIzaSyD5ZbRMnRdqubGNSc2KzEVDg2fKizxbniU",
    authDomain: "blog-594a2.firebaseapp.com",
    databaseURL: "https://blog-594a2-default-rtdb.firebaseio.com",
    projectId: "blog-594a2",
    storageBucket: "blog-594a2.appspot.com",
    messagingSenderId: "554911575314",
    appId: "1:554911575314:web:5462233055b1566e4e57cb",
    measurementId: "G-F92XYFF2VB"
  };

// const firebaseConfig = {
//   apiKey: "AIzaSyC1wl2ZiHVvp1fOG2jCdKlc0NsQXTcFjjE",
//   authDomain: "thenewsread-66fa6.firebaseapp.com",
//   databaseURL: "https://thenewsread-66fa6-default-rtdb.firebaseio.com",
//   projectId: "thenewsread-66fa6",
//   storageBucket: "thenewsread-66fa6.appspot.com",
//   messagingSenderId: "822174605959",
//   appId: "1:822174605959:web:361bfe0278c54888694e22",
//   measurementId: "G-PHVEKXM5L7",
// };
// const app = !getApps().length && initializeApp(firebaseConfig);
// getApps()
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db};
