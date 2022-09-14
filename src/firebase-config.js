import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: 'fir-c1000.firebaseapp.com',
  projectId: 'fir-c1000',
  storageBucket: 'fir-c1000.appspot.com',
  messagingSenderId: '452012360496',
  appId: '1:452012360496:web:cde091ce346bda38b1bef5',
  measurementId: 'G-4Y8CB5JBQ8',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
