import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import { db } from '../../firebase.config'
export const api_pizzas = {
  pizzas: {
    pizza: async (id) => {
      if (id) {
        const docSnap = await getDoc(doc(db, 'pizzas', id))
        if (docSnap.exists()) {
          return docSnap.data()
        } else {
          console.log('No such document!')
        }
        return {}
      }
      const querySnapshot = await getDocs(collection(db, 'pizzas'))
      const pizzaData = []
      querySnapshot.forEach((doc) => {
        pizzaData.push(doc.data())
      })
      return pizzaData
    },
  },
  minha_sacola: {
    get: async (id) => {
      if (id) {
        const docSnap = await getDoc(doc(db, 'minha_sacola', id))
        if (docSnap.exists()) {
          return docSnap.data()
        } else {
          console.log('No such document!')
        }
        return {}
      }
      const querySnapshot = await getDocs(collection(db, 'minha_sacola'))
      const usersData = []
      querySnapshot.forEach((doc) => {
        usersData.push(doc.data())
      })
      return usersData
    },
  },
}