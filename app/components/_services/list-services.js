import { db } from "../components/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

console.log(db);
export const getItems = async (userId) => {
    try {
      const items = [];
      const itemsCollection = collection(db, "users", userId, "items");
      const q = query(itemsCollection);
  
      const querySnapshot = await getDocs(q);
  
      querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() });
      });
      return items;
    } catch (error) {
      console.error("Error", error);
    }
  };

  export const addItem = async (userId, item) => {
    try {
      const itemsCollection = collection(db, "users", userId, "items");
      const docRef = await addDoc(itemsCollection, item);
      return docRef.id;
    } catch (error) {
      console.error("Error in addItem:", error);
      throw error;
    }
  };

  export const deleteItem = async (userId, itemId) => {
    try {
      const itemsCollection = collection(db, "users", userId, "items");
      const docRef = doc(itemsCollection, itemId);
      await deleteDoc(docRef);
    } catch (error) {
      console.error("Error in deleteItem:", error);
    }
  };