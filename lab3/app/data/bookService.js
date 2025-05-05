import { addDoc, collection, query, where, serverTimestamp, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { firestore, auth } from "./init";

export const createBook = async (newBook) => {

  const tempBook = {
    ...newBook, // {id: ..., text: ... }
    userId: auth?.currentUser.uid,
    created: serverTimestamp()
  }
  const bookCollection = collection(firestore, "books");
  const docRef = await addDoc(bookCollection, tempBook);
  console.log("Document added:", docRef.id);
  return tempBook;
}

export const readBooks = async () => {
  const books = [];

  const bookCollection = collection(firestore, "books");
  let q;
  q = query(bookCollection);
  const results = await getDocs(q);
  results.forEach(doc => {
    // todos.push(doc.data()) // pobiera sam obiekt
    books.push({ docID: doc.id, ...doc.data() }); // pobiera obiekt i jego Firestore'owe ID
  })

  return books;
}


// UWAGA:
// jako ID można przyjąć pole, jakie się samemu nada - patrz linijka 7
// albo ID documentu, który generuje Firestore
export const updateBook = async (bookId, updatedBook) => {
  // UWAGA: jeżeli sp©óbujesz zmienić obiekt nienależący do aktualnego użytkownika
  // i masz reguły na Firestore, to Ci wyskoczy error.
  const bookDocRef = doc(firestore, "books", bookId);
  try {
    await updateDoc(bookDocRef, updatedBook);
    console.log("Book updated:", bookId);
  } catch (error) {
    console.error("Error updating book:", error);
  }
}


export const deleteBook = async (bookId) => {
  const bookDocRef = doc(firestore, "books", bookId);
  try {
    await deleteDoc(bookDocRef);
    console.log("Book deleted:", bookId);
  } catch (error) {
    console.error("Error deleting book:", error);
  }
}