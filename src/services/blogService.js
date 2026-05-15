import { db } from '../config/firebase'
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDocs,
    orderBy,
    query,
    serverTimestamp,
} from 'firebase/firestore'

const postsRef = collection(db, 'posts')

export const getPosts = async () => {
    const postsQuery = query(postsRef, orderBy('createdAt', 'desc'))
    const snapshot = await getDocs(postsQuery)

    return snapshot.docs.map((postDoc) => ({ id: postDoc.id, ...postDoc.data() }))
}

export const createPost = async (postData) => {
    return addDoc(postsRef, {
        ...postData,
        createdAt: serverTimestamp(),
    })
}

export const deletePost = async (id) => {
    await deleteDoc(doc(db, 'posts', id))
}
