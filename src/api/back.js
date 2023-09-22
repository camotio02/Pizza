import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import { db } from '../../firebase.config'
export const api_users = {
  user: {
    get: async (id) => {
      if (id) {
        const docSnap = await getDoc(doc(db, 'ChatPizzaria', id))
        if (docSnap.exists()) {
          return docSnap.data()
        } else {
          console.log('No such document!')
        }
        return {}
      }
      const querySnapshot = await getDocs(collection(db, 'ChatPizzaria'))
      const usersData = []
      querySnapshot.forEach((doc) => {
        usersData.push(doc.data())
      })
      return usersData
      console.log(usersData)
    },
  },
}

// const sendMessage = async (e) => {
//     e.preventDefault();

//     await db.collection('ChatPizzaria').add({
//       userText: message,
//       userImage: 'img',
//       user: 'user',
//       timestamp: new Date(),
//     });

//     // Resposta automática (substitua pela lógica desejada)
//     await db.collection('ChatPizzaria').add({
//         userImage: 'img',
//         userText: 'Obrigado por entrar em contato conosco. Em breve responderemos sua mensagem!',
//       user: 'bot',
//       timestamp: new Date(),
//     });

//     setMessage('');
//   };
