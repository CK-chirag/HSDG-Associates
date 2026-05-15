import { db } from "../../config/firebase";
import {
  collection, addDoc, getDocs,
  deleteDoc, doc, orderBy, query, serverTimestamp
} from "firebase/firestore";

const postsRef = collection(db, "posts");

export const getPosts = async () => {
  const q = query(postsRef, orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
};

export const createPost = async (postData) => {
  return await addDoc(postsRef, {
    ...postData,
    createdAt: serverTimestamp(),
  });
};

export const deletePost = async (id) => {
  await deleteDoc(doc(db, "posts", id));
};