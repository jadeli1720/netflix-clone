import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const apiKey = process.env.REACT_APP_FIREBASE_APIKEY;
const authDomain = process.env.REACT_APP_FIREBASE_AUTHDOMAIN;
const projectId = process.env.REACT_APP_FIREBASE_PROJECTID;
const storageBucket = process.env.REACT_APP_FIREBASE_STORAGEBUCKET;
const messagingSenderId = process.env.REACT_APP_FIREBASE_MESSSENDID;
const appId =  process.env.REACT_APP_FIREBASE_APPID;

//This  works!!! Make sure your .env file variable does not contain spaces on either side of the '=' symbol.
const config = { 
    apiKey:`${apiKey}`,
    authDomain:`${authDomain}`,
    projectId:`${projectId}`,
    storageBucket:`${storageBucket}`,
    messagingSenderId:`${messagingSenderId}`,
    appId:`${appId}`
};


const firebase = Firebase.initializeApp(config);


export { firebase };