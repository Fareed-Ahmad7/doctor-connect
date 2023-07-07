
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  getDoc,
  doc,
} from "firebase/firestore/lite";
import {
  getAuth,
  // GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  // onAuthStateChanged,
} from "firebase/auth";
// import { useNavigate } from "react-router-dom";

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

async function getMessage(db) {
  const citiesCol = collection(db, "test");
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map((doc) => doc.data());
  console.log(cityList);
  return cityList;
}
getMessage(db);

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

      console.log("user created:", cred.user);
      window.open("/list");
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
      console.log(user);
      window.location = "/list";
      // console.log('uid',user.uid)
      // console.log('cu',cUser)
      // console.log('email',cUser.email)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      console.log("invalid signin");
    });
}

async function getPatients() {
  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const usersCol = collection(db, "users");
  const userSnapshot = await getDocs(usersCol);
  const userList = userSnapshot.docs.map((doc) => doc.data());
  console.log(userList);
  var list = []
  userList.forEach(function(doc) {
    var userName = doc.first_name + doc.last_name;
    list.push(userName);
    return list
    // var last = ;
    // console.log(userName);
    // console.log(list);
    // console.log(last);
  });
  // console.log(firstName);
  // console.log(lastName);
  // return cityList;
}

async  function getDashboardData(uid){
  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const docRef = doc(
    db,
    `users/${uid}/patient_details/profile`,
  );
  // const docRef  = collection(db, "users");
  const docSnap = await getDoc(docRef);
  console.log(" document!");
  if (docSnap.exists()) {
    console.log(" document! exists");
    // console.log("Document data:", docSnap.data());
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
  return docSnap.data()

  // const userList = docSnap.docs.map((doc) => doc.data());
  // console.log(userList);
  // console.lob(docSnap.data())
  // profileDoc.data()
  // profileDoc.forEach(doc=>{
  //   console.log("hello", doc.data());

  // })
  // console.log(profileDoc)
  // const userSnapshot = await getDocs(usersCol)
  
}
// // subscribing to auth changes
// onAuthStateChanged(auth,(user)=>{
//       console.log("user status changed:",user);
// })

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
export { auth, FirebaseSignup, FirebaseSignIn, getPatients, getDashboardData };
