import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";

import cors from "cors";

//Routes
// import authRoutes from './routes/authRoutes.js'


const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json());

//Routes
// app.use('/auth',authRoutes);
// app.use('/question',questionRoutes);

app.get("/", (req, res) => {
  res.send("hello from SkillShow entry point");
});

app.post("/signup", (req, res) => {
    const {email,password,firstName, lastName, selectedRole} = req.body
    console.log(email, password, firstName, lastName, selectedRole);
    FirebaseSignup(email, password, firstName, lastName, selectedRole);
    //  res.redirect("/dashboard");
    //  next();

});

app.post("/signIn", (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  FirebaseSignIn(email,password);
});

app.listen(process.env.PORT || 4000, () => {
  console.log("server started...");
  // connectDB();
});

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  doc,
} from "firebase/firestore/lite";
import {
  getAuth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiE42K7j_hTYbIZR-hqzKd4SI6-4l4Zec",
  authDomain: "doctorconnect-fb256.firebaseapp.com",
  projectId: "doctorconnect-fb256",
  storageBucket: "doctorconnect-fb256.appspot.com",
  messagingSenderId: "923327517757",
  appId: "1:923327517757:web:0e3a3791725575cff28654",
  measurementId: "G-TN8ZF004C7",
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
// const cUser = auth.currentUser;
// const provider = new GoogleAuthProvider();
// export {auth,provider};

async function getMessage(db) {
  const citiesCol = collection(db, "test");
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map((doc) => doc.data());
  console.log(cityList);
  return cityList;
}
// getMessage(db);

// signup users
async function FirebaseSignup(mail, pass, fName, lName, selecRole) {
  createUserWithEmailAndPassword(auth, mail, pass)
    .then(async (cred) => {
      // Add a new document in collection "cities"
      await setDoc(doc(db, "users", cred.user.uid), {
        first_name: fName,
        last_name: lName,
        role: selecRole,
      });
      // window.open("/dashboard");
      
      // console.log("user created:", cred.user);
      // console.log("uid", user.uid);

      //   signUpFormPage.reset();
    })
    .catch((err) => {
      console.log(err.message);
    });
}

// signin users
async function FirebaseSignIn(mail, pass) {
    signInWithEmailAndPassword(auth, mail, pass)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // console.log(user)
        // console.log('uid',user.uid)
        // console.log('cu',cUser)
        // console.log('email',cUser.email)
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
    });
}

// subscribing to auth changes
onAuthStateChanged(auth,(user)=>{
      console.log("user status changed:",user);
})

// auth.onAuthStateChanged((user) => {
//   if (user) {
//     // User logged in already or has just logged in.
//     console.log(user.uid);
//   } else {
//     // User not logged in or has just logged out.
//   }
// });
// console.log("current user",auth.currentUser)

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/auth.user
//     const uid = user.uid;
//     console.log(uid)
//     // ...
//   } else {
//     // User is signed out
//     console.log("signed out")
//     // ...
//   }
// });

// onAuthStateChanged()

// console.log("cu", cUser);
// console.log("email", cUser.email);