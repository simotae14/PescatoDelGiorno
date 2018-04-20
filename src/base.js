import Rebase from 're-base';
import firebase from 'firebase';

// creo App Firebase
const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyBHbUafHIRL74CIXEojW9uU1LZVx_vrHJg',
	authDomain: 'pescato-del-giorno-startae14.firebaseapp.com',
	databaseURL: 'https://pescato-del-giorno-startae14.firebaseio.com',
	projectId: 'pescato-del-giorno-startae14',
	storageBucket: 'pescato-del-giorno-startae14.appspot.com',
	messagingSenderId: '512992871048'
});

// creo il rebase
const base = Rebase.createClass(firebaseApp.database());

// faccio un export con NOME
export { firebaseApp };

// faccio un export Default
export default base;
