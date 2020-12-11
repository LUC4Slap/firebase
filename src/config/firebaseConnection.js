import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
// import firebaseConfig from './configFIrebase';
const firebaseConfig = {
  apiKey: 'AIzaSyAEDTVu5PNVN8CPGidbogaJAybbL-ts03M',
  authDomain: 'meuapp-dab0d.firebaseapp.com',
  projectId: 'meuapp-dab0d',
  storageBucket: 'meuapp-dab0d.appspot.com',
  messagingSenderId: '632867410870',
  appId: '1:632867410870:web:c13cb76c3a01cd0bc1e717',
  measurementId: 'G-HPELF62CB2',
};

if (!firebase.apps.length) {
  // Se não tiver nenhum app conectado ele conecta
  firebase.initializeApp(firebaseConfig);
}
export default firebase;
