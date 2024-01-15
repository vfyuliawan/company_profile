"use client";

import React, { useEffect, useState } from "react";
import { CollectionReference, getDocs, query } from "@firebase/firestore";
import { app } from "../api/firebase";
import { DocumentData, QueryDocumentSnapshot, collection, getFirestore } from "firebase/firestore";

const CardTest: React.FC = () => {

    interface modelCars{
        id: string,
        content : string
    }

    const [data, setData] = useState<DocumentData[]>([]);
    const fetchData = async () => {
    console.log("runs");

    try {
        // Use getFirestore to access Firestore functions
        const firestore = getFirestore(app);
        const collectionRef: CollectionReference = collection(
          firestore,
          "carsId"
        );
        const querySnapshot = await getDocs(query(collectionRef));
  
        const documentsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
  
        setData(documentsData);
  
        console.log("Data fetched:", documentsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {/* Component content here */}
      <h1>test</h1>
      {data.map((item) => (
        <div key={item.id}>
          <p>ID: {item.id}</p>
          <p>ID: {item.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default CardTest;
