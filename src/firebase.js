import firebase from 'firebase';

const config = {
	apiKey: "AIzaSyBZzHqxdNhF0t0Fdb9au8S0Cc6gHXx6SQY",
  authDomain: "virtual-pet-26ad5.firebaseapp.com",
  databaseURL: "https://virtual-pet-26ad5.firebaseio.com",
  projectId: "virtual-pet-26ad5",
  storageBucket: "",
  messagingSenderId: "335980686255"
};
firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();