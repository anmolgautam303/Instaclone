import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCOL9vI0a2V2MC1SwEL-Sw59WwxTw4_jHg",
    authDomain: "instagramclone-6ac37.firebaseapp.com",
    databaseURL: "https://instagramclone-6ac37.firebaseio.com",
    projectId: "instagramclone-6ac37",
    storageBucket: "instagramclone-6ac37.appspot.com",
    messagingSenderId: "483749270878"
  };
firebase.initializeApp(config);

export const auth = firebase.auth();
export const database = firebase.database();
