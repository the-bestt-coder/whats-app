import firebase from 'firebase';

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_MESSAGE_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_APP_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyC3e54bxuLrqCDdjVRSO2Kqu3UGJDdapIQ",
  authDomain: "whatsapp-clone-1e29f.firebaseapp.com",
  projectId: "whatsapp-clone-1e29f",
  storageBucket: "whatsapp-clone-1e29f.appspot.com",
  messagingSenderId: "504024688209",
  appId: "1:504024688209:web:5af9ca8025010ea13afa70"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

const auth = app.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
