import { db } from "../components/firebase";
import { doc, collection, getDocs, setDoc, query } from "firebase/firestore";

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
      const docRef = await setDoc(doc(db, "users", userId), item);
      return docRef.id;
    } catch (error) {
      console.error("Error in addItem:", error);
      throw error;
    }
  };

  export const deleteItem = async (userId, itemId) => {
    try {
      const docRef = await deleteDoc(doc(db, "users", userId), item);
    } catch (error) {
      console.error("Error in deleteItem:", error);
    }
  };