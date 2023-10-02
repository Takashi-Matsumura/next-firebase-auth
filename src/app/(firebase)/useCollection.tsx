import {
  DocumentData,
  Query,
  collection,
  onSnapshot,
  query,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./config";

interface Channels {
  id: string;
  channel: DocumentData;
}

const useCollection = (data: string) => {
  const [documents, setDocuments] = useState<Channels[]>([]);
  const collectionRef: Query<DocumentData> = query(collection(db, data));

  useEffect(() => {
    onSnapshot(collectionRef, (snapshot) => {
      const docs: Channels[] = [];
      snapshot.docs.forEach((doc) => {
        docs.push({
          id: doc.id,
          channel: doc.data(),
        });
      });
      setDocuments(docs);
    });
  }, []);

  return { documents };
};

export default useCollection;
