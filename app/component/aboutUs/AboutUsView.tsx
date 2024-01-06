"use client";

import { app } from "@/app/api/firebase";
import { WebTheme } from "@/app/theme/webTheme";
import {
  CollectionReference,
  DocumentData,
  collection,
  getDocs,
  getFirestore,
  query,
} from "firebase/firestore";
import { useEffect, useState } from "react";

interface ParagrafInterface {
  paragraf1: string;
  paragraf2?: string;
  paragraf3?: string;
  paragraf4?: string;
}

export const AboutUsView = () => {
  const [paragraf, setParagraf] = useState<DocumentData[]>([]);
  const [textParagraf, setTextParagraf] = useState<any>();

  const getParagraf = async () => {
    try {
      const firestore = getFirestore(app);
      const collectionRef: CollectionReference = collection(
        firestore,
        "aboutUs"
      );
      const querySnapshot = await getDocs(query(collectionRef));

      const documentsData = querySnapshot.docs.map((doc) => {
        return {
          ...doc.data(),
        };
      });
      const paragrafArray = Object.values(documentsData);
      setTextParagraf(paragrafArray);
      setParagraf(documentsData);

      console.log("Data fetched:", paragrafArray);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getParagraf();
    return () => {};
  }, []);

  return (
    <section
      id="about-us"
      style={{ marginTop: 150, backgroundColor: WebTheme.cardGrey5 }}
    >
      <div style={{ padding: 30, flexDirection: "column", display: "flex" }}>
        <div className="section-header">
          <h2>Tentang Kami</h2>
        </div>
        {/*/.section-header*/}
        <p style={{ marginTop: 30, marginLeft: "20px" }}>
          {paragraf[0]?.paragraf1}
        </p>
        <p style={{ marginTop: 20, marginLeft: "20px" }}>
          {paragraf[0]?.paragraf2}
        </p>
        <p style={{ marginTop: 20, marginLeft: "20px" }}>
          {paragraf[0]?.paragraf3}
        </p>
        <p style={{ marginTop: 20, marginLeft: "20px" }}>
          {paragraf[0]?.paragraf4}
        </p>
      </div>
    </section>
  );
};
