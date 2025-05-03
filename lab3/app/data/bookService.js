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
  const user = auth?.currentUser;
  let q;
  if (!user) {
    q = query(bookCollection);
  }else{
    q = query(bookCollection, where("userId", "==", user.uid));
  }
  const results = await getDocs(q);

  results.forEach(doc => {
    // todos.push(doc.data()) // pobiera sam obiekt
    books.push({ id: doc.id, ...doc.data() }); // pobiera obiekt i jego Firestore'owe ID
  })

  return books;
}


// UWAGA:
// jako ID można przyjąć pole, jakie się samemu nada - patrz linijka 7
// albo ID documentu, który generuje Firestore
// export const updateBook = async (bookId, updatedBook) => {
//   // UWAGA: jeżeli sp©óbujesz zmienić obiekt nienależący do aktualnego użytkownika
//   // i masz reguły na Firestore, to Ci wyskoczy error.
//   const todoDocRef = doc(firestore, "todos", todoId);
//   try {
//     await updateDoc(todoDocRef, updatedTodo);
//     console.log("Todo updated:", todoId);
//   } catch (error) {
//     console.error("Error updating todo:", error);
//   }
// }


// export const deleteTodo = async (todoId) => {
//   // tak samo jak updateTodo
//   const todoDocRef = doc(firestore, "todos", todoId);
//   try {
//     await deleteDoc(todoDocRef);
//     console.log("Todo deleted:", todoId);
//   } catch (error) {
//     console.error("Error deleting todo:", error);
//   }
// }