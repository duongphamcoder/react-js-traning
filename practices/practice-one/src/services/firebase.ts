import { NotificationMessage } from 'constants/notification';
import { firestore } from 'databases/firebase-config';
import { addDoc, collection } from 'firebase/firestore';

type FirebasePayload = {
  [key: string]: string | number | boolean;
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
        return Promise.reject({
          message: NotificationMessage.SEND_REQUSET_FAILED
        });
      }
    },
  };
};

export default firebaseService;
