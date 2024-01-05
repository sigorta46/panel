// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDtgh6W4IPiutidbpPYfXZcgRwPf0vsEW0",
    authDomain: "insuranceproject-6c05b.firebaseapp.com",
    projectId: "insuranceproject-6c05b",
    storageBucket: "insuranceproject-6c05b.appspot.com",
    messagingSenderId: "586631675065",
    appId: "1:586631675065:web:ec036e616bca8f98beaf68",
    measurementId: "G-0EWHCR0441"
  };

const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);

export default storage;

// import { initializeApp } from 'firebase/app';
// import { getStorage } from 'firebase/storage';
// import { getMessaging } from 'firebase/messaging';

// const firebaseConfig = {
//   apiKey: "AIzaSyDtgh6W4IPiutidbpPYfXZcgRwPf0vsEW0",
//   authDomain: "insuranceproject-6c05b.firebaseapp.com",
//   projectId: "insuranceproject-6c05b",
//   storageBucket: "insuranceproject-6c05b.appspot.com",
//   messagingSenderId: "586631675065",
//   appId: "1:586631675065:web:ec036e616bca8f98beaf68",
//   measurementId: "G-0EWHCR0441"
// };

// const firebaseApp = initializeApp(firebaseConfig);
// const storage = getStorage(firebaseApp);
// const messaging = getMessaging(firebaseApp);

// export { storage, messaging };
