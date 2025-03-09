// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBlRCnB9Li6cbfZnIgZ_KHsBimHOJyfFjE',
  authDomain: 'auth2ti.firebaseapp.com',
  projectId: 'auth2ti',
  storageBucket: 'auth2ti.firebasestorage.app',
  messagingSenderId: '835918387691',
  appId: '1:835918387691:web:12d55731a27f8fc2f321ae'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { auth }
