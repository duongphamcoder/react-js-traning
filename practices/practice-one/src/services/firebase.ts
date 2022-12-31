import { firestore } from 'databases/firebase-config';
import { addDoc, collection } from 'firebase/firestore';

type FirebasePayload = {
  [key: string]: any;
};

const firebaseService = (collectionPr: string) => {
  return {
    addData: async (data: FirebasePayload) => {
      try {
        const result = await addDoc(collection(firestore, collectionPr), {
          ...data,
        });
        return result;
      } catch (error) {
        throw new Error('Unachievable');
      }
    },
  };
};

export default firebaseService;
