import { initializeApp } from 'firebase/app'
import {
    getFirestore,
    collection,
    getDocs,
    addDoc,
    deleteDoc,
    doc,
    onSnapshot,
    query,
    where,
    orderBy,
    serverTimestamp
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyC7LUw1oLlsUm5yuOM6pfs1PgwzLbw4guo',
    authDomain: 'fir-9-51186.firebaseapp.com',
    projectId: 'fir-9-51186',
    storageBucket: 'fir-9-51186.appspot.com',
    messagingSenderId: '869209986593',
    appId: '1:869209986593:web:3ec37f348d49d335667560',
}

initializeApp(firebaseConfig)

// init services
const db = getFirestore()

// collection ref
const colRef = collection(db, 'books')

// getting all collection data
/*
getDocs(colRef)
    .then((snapshot) => {
        let books = []
        snapshot.docs.forEach((doc) => {
            books.push({ ...doc.data(), id: doc.id })
        })
        console.log(books)
    })
    .catch((err) => {
        console.log(err.message)
    })
*/
// adding documents
const addBookForm = document.querySelector('.add')
addBookForm.addEventListener('submit', (e) => {
    e.preventDefault()
    addDoc(colRef, {
        title: addBookForm.title.value,
        author: addBookForm.author.value,
        createdAt: serverTimestamp()
    }).then(() => {
        addBookForm.reset()
    })
})

// deleting document
const deleteBookForm = document.querySelector('.delete')
deleteBookForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const docRef = doc(db, 'books', deleteBookForm.id.value)

    deleteDoc(docRef).then(() => {
        deleteBookForm.reset()
    })
})

// queries
const q = query(
  colRef,
  // query
  // where('author','==','dani'),
  // order
  //orderBy('title', 'desc')
  orderBy('createdAt')
)

// realtime Listener firestore database
onSnapshot(q, (snapshot)=> {
    let books = []
    snapshot.docs.forEach((doc) => {
        books.push({ ...doc.data(), id: doc.id })
    })
    console.log('onSnapshot')
    console.log( books)
})