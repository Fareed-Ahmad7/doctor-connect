import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'

import cors from 'cors'


//Routes
// import authRoutes from './routes/authRoutes.js'


const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json())


//Routes
// app.use('/auth',authRoutes);
// app.use('/question',questionRoutes);

app.get('/',(req, res)=>{
    res.send('hello from SkillShow entry point')
})


app.listen(process.env.PORT || 4000,()=>{
    console.log('server started...')
    // connectDB();
})


import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

// import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiE42K7j_hTYbIZR-hqzKd4SI6-4l4Zec",
  authDomain: "doctorconnect-fb256.firebaseapp.com",
  projectId: "doctorconnect-fb256",
  storageBucket: "doctorconnect-fb256.appspot.com",
  messagingSenderId: "923327517757",
  appId: "1:923327517757:web:0e3a3791725575cff28654",
  measurementId: "G-TN8ZF004C7"
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

// const firebaseApp = initializeApp(firebaseConfig);
// const db = getFirestore();
// const firebaseDB = getFirestore(firebaseApp);

// async function getMessage(firebaseDB) {
//   const citiesCol = collection(firebaseDB, "test");
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map((doc) => doc.data());
//   return cityList;
// }const cityRef = db.collection('cities').doc('SF');
// const cityRef = db.collection("test").doc("test1");
// const doc = await cityRef.get();
// if (!doc.exists) {
//   console.log("No such document!");
// } else {
//   console.log("Document data:", doc.data());
// }

async function getMessage(db) {
  const citiesCol = collection(db, "test");
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map((doc) => doc.data());
  console.log(cityList)
  return cityList;
}
getMessage(db)