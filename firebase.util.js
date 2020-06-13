const firebase = require('firebase');
require('firebase/database');
const { promisify } = require('util');

const config = {
    apiKey: process.env.FIREBASE_KEY,
    authDomain: 'hospital-finder-a78ad.firebaseapp.com',
    databaseURL: 'https://hospital-finder-a78ad.firebaseio.com',
    projectId: 'hospital-finder-a78ad',
    storageBucket: 'hospital-finder-a78ad.appspot.com',
    messagingSenderId: '671051561063',
    appId: '1:671051561063:web:161fbc74b7a136e7467cc2',
    measurementId: 'G-M9KKL4CG0K',
};

const convertDataToSnapShot = (data) => {
    const res = data.docs.map((doc) => {
        return doc.data();
    });
    return res;
};
const fetchData = async (type, userId) => {
    const snapshot = await firestore.collection(type).get();
    const result = snapshot.docs.map((doc) => doc.data());
    return result.filter((val) => val.userId === userId);
};

firebase.initializeApp(config);

const firestore = firebase.firestore();

module.exports = {
    fetchData,
    firebase,
    firestore,
};
