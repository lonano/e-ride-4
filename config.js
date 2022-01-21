import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyC5h8w-uoi-0gtmm_ejV3JQUuslaW116ds",
    authDomain: "e-ride-df708.firebaseapp.com",
    projectId: "e-ride-df708",
    storageBucket: "e-ride-df708.appspot.com",
    messagingSenderId: "684473367446",
    appId: "1:684473367446:web:723ca916b75adec7cbfbb7"
  };




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


