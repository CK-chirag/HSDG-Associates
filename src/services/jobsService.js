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

const jobsRef = collection(db, 'jobs')

export const getJobs = async () => {
    const jobsQuery = query(jobsRef, orderBy('createdAt', 'desc'))
    const snapshot = await getDocs(jobsQuery)

    return snapshot.docs.map((jobDoc) => ({ id: jobDoc.id, ...jobDoc.data() }))
}

export const createJob = async (jobData) => {
    return addDoc(jobsRef, {
        ...jobData,
        createdAt: serverTimestamp(),
    })
}

export const deleteJob = async (id) => {
    await deleteDoc(doc(db, 'jobs', id))
}
