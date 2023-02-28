
  import firebase from 'firebase/compat/app'
  import "firebase/compat/analytics";
  import 'firebase/compat/auth'
  import 'firebase/compat/firestore'
  import 'firebase/compat/storage'
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBxKqVBfWei7EIUrLo1cCfspqEyCOSjh9Y",
  authDomain: "college-market-place.firebaseapp.com",
  projectId: "college-market-place",
  storageBucket: "college-market-place.appspot.com",
  messagingSenderId: "701233673108",
  appId: "1:701233673108:web:cd3c86e72adb5411a3d581",
    measurementId: "G-L5GMB4QL32"
  };
  
  // Initialize Firebase
  export const Firebase = firebase.initializeApp(firebaseConfig);

  
