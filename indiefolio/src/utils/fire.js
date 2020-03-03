import firebase from 'firebase';

/*--------------------------------for staging-configration------------------------------------------*/

const config = {
    apiKey: "AIzaSyBo7hFgYi8pp-wshPjgPSQhZ7UVsSeJ0dk",
    authDomain: "smart-appt-patient.firebaseapp.com",
    databaseURL: "https://smart-appt-patient.firebaseio.com",
    projectId: "smart-appt-patient",
    storageBucket: "",
    messagingSenderId: "1070938428973",
    appId: "1:1070938428973:web:2f662a4656b02a74b38aa4"
};

const firebaseApp = firebase.initializeApp(config);

export default firebaseApp;

// export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();