// src/firestore.js

import { db } from './firebase';
import { collection, addDoc, getDocs, doc, getDoc, updateDoc } from 'firebase/firestore';

// Add a new document
export const addData = async (collectionName, data) => {
  return await addDoc(collection(db, collectionName), data);
};

// Get all documents from a collection
export const getData = async (collectionName) => {
  const querySnapshot = await getDocs(collection(db, collectionName));
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// Get a single document by ID
export const getDocument = async (collectionName, id) => {
  const docRef = doc(db, collectionName, id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    return null;
  }
};

// Update a document
export const updateDocument = async (collectionName, id, data) => {
  const docRef = doc(db, collectionName, id);
  return await updateDoc(docRef, data);
};