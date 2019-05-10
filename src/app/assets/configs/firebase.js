import firebase from 'firebase/app';
import 'firebase/database'; // If using Firebase database
import 'firebase/storage';
import {firebaseConfig} from '../../assets/configs/config.js';

firebase.initializeApp(firebaseConfig)
const databaseRef = firebase.database().ref();
export default firebase;

export const loginRef = databaseRef.child("general_data/users");
export const MoviesListRef = databaseRef.child("general_data/movies");
