import { app } from "@/app/api/firebase";
import {
  CollectionReference,
  DocumentData,
  collection,
  getDocs,
  getFirestore,
  query,
} from "firebase/firestore";
import { useState } from "react";

export function HomeViewModel() {
  const [cars, setcars] = useState<CarInterFace[]>([]);
  const [price, setPrice] = useState<string>();


  const getHarga = (id: string) => {
    const data = cars.find(item => item.id === id)
    setPrice(data?.price)
    console.log("dapetHarga", data?.name, data?.price);
    

  }
  const getCars = async () => {
    try {
      const firestore = getFirestore(app);
      const collectionRef: CollectionReference = collection(
        firestore,
        "carsId"
      );
      const querySnapshot = await getDocs(query(collectionRef));

      const documentsData = querySnapshot.docs.map(
        (doc) =>
          ({
            id: doc.id,
            ...doc.data(),
          } as CarInterFace)
      );

      setcars(documentsData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  console.log("cekCaars", cars);

  return {
    cars,
    getCars,
    getHarga,
    price
  };
}
