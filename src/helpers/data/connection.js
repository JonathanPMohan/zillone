import firebase from 'firebase/app';
import 'firebase/auth';
import apiKeys from '../apiKeys';

const firebaseApp = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(apiKeys.firebase.Config);
  }
};

export default firebaseApp;
