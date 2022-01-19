import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyC7LUw1oLlsUm5yuOM6pfs1PgwzLbw4guo',
    authDomain: 'fir-9-51186.firebaseapp.com',
    projectId: 'fir-9-51186',
    storageBucket: 'fir-9-51186.appspot.com',
    messagingSenderId: '869209986593',
    appId: '1:869209986593:web:3ec37f348d49d335667560',
}

initializeApp(firebaseConfig)

const db = getFirestore()

export { db }