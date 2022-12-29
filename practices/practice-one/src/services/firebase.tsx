import { firestore } from "helpers/firebase/config";
import { addDoc, collection } from "firebase/firestore";

const firebaseService = (collectionPr: string) => {
  return {
    addData: async <T,>(data: T) => {
      try {
        const result = await addDoc(collection(firestore, collectionPr), {
          data,
        });
        return result;
      } catch (error) {
        throw new Error("Unachievable");
      }
    },
  };
};

export default firebaseService;
