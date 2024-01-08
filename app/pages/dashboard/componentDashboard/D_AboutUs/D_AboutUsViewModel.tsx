import { app, db } from "@/app/api/firebase";
import {
  CollectionReference,
  DocumentData,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";

export function D_AboutUsViewModel() {
  const [paragrafAdd, setParagrafAdd] = useState<ParagrafListInterface>({
    paragraf1: "",
    paragraf2: "",
    paragraf3: "",
    paragraf4: "",
  });
  const [paragrafList, setParagrafList] = useState<DocumentData[]>([]);
  const [docId, setdocId] = useState<string>("");
  const getParagraf = async () => {
    try {
      const firestore = getFirestore(app);
      const collectionRef: CollectionReference = collection(
        firestore,
        "aboutUs"
      );
      const querySnapshot = await getDocs(query(collectionRef));

      const documentsData = querySnapshot.docs.map((doc) => {
        setdocId(doc.id);
        return {
          ...doc.data(),
        };
      });
      const paragrafArray = Object.values(documentsData);
      setParagrafList(documentsData);
      // console.log("Data fetched:", paragrafArray);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const editParagraf = async (arrParagraf : ParagrafListInterface) => {
    try {
      const firestore = getFirestore(app);
      const documentRef = doc(db, "aboutUs", docId);
      const documentSnapshot = await getDoc(documentRef);

      if (documentSnapshot.exists()) {
        // const updatedData = { ...documentSnapshot.data(), arrParagraf };
        // const updatedData = { paragrafList };
        // console.log("updatedata", updatedData);
        console.log("dfasdfads", paragrafList);
        
          await updateDoc(documentRef, paragrafList[0]); 

        console.log("Document successfully updated!");
      } else {
        console.log("Document not found.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getParagraf();

    return () => {};
  }, []);

  return {
    setParagrafList,
    paragrafAdd,
    setParagrafAdd,
    editParagraf,
    paragrafList,
    getParagraf,
  };
}
