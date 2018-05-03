import * as firebase from 'firebase';

const prodConfig = {
  apiKey: "AIzaSyCV241zcktOKCVMGvswXVO9cCPtosEMddQ",
    authDomain: "ibm-challenge.firebaseapp.com",
    databaseURL: "https://ibm-challenge.firebaseio.com",
    projectId: "ibm-challenge",
    storageBucket: "",
    messagingSenderId: "1089019939373",
};

const devConfig = {
  apiKey: "AIzaSyCV241zcktOKCVMGvswXVO9cCPtosEMddQ",
    authDomain: "ibm-challenge.firebaseapp.com",
    databaseURL: "https://ibm-challenge.firebaseio.com",
    projectId: "ibm-challenge",
    storageBucket: "",
    messagingSenderId: "1089019939373",
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
