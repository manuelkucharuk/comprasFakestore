import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBH_0YdAVmiq7a-QRBCD9aaAhKwmxHIk44",
    authDomain: "manuelkucharukfb.firebaseapp.com",
    projectId: "manuelkucharukfb",
    storageBucket: "manuelkucharukfb.appspot.com",
    messagingSenderId: "769865327583",
    appId: "1:769865327583:web:697e402b5f03581b031a6a",
    measurementId: "G-GZMC9X13LB"
}

firebase.initializeApp(firebaseConfig);
export default firebase

