import {
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    doc,
    updateDoc,
    query,
    where,
} from 'firebase/firestore';
import { db } from '../../firebase.config';
import React, { useEffect } from 'react';

export const getCreatPizza = async (userId) => {
    const tasksRef = collection(db, 'CreatPizza')
    const querySnapshot = await getDocs(
        query(tasksRef, where('userId', '==', userId))
    )
    const res = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    return res
}

// recuperar tarefas associadas a um 

export const addPizza = async (data) => {
    console.log(data)
    try {
        const docRef = await addDoc(collection(db, 'CreatPizza'), data)
        console.log('Documento escrito com ID: ', docRef.id)
        return docRef.id
    } catch (e) {
        console.error('Erro ao adicionar documento: ', e)
    }
}

// Para adicionar um novo documento a uma coleção 

export const updatePizza = async (data) => {
    try {
        await updateDoc(doc(db, 'CreatPizza', data.id), data)
        console.log('Documento editado com ID: ', data.id)
    } catch (e) {
        console.error('Erro ao editar documento: ', e)
    }
}

// para atualizar um documento de tarefa
//  em um banco de dados 
// do Firestore usando o Firebase

export const deletePizza = async (id) => {
    try {
        await deleteDoc(doc(db, 'CreatPizza', id))
        return
    } catch (e) {
        console.error('Erro ao adicionar documento: ', e)
    }
}

// para excluir um documento de tarefa 
// de um banco de dados do Firestore
