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

      // console.log("Data fetched:", paragrafArray);
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
      <div
        style={{
          paddingLeft: "30px",
          paddingRight: "30px",
          paddingTop: "50px",
          paddingBottom: "50px",
          flexDirection: "column",
          display: "flex",
        }}
      >
        <div className="section-header" style={{ marginTop: 20 }}>
          <h2>Tentang Kami</h2>
        </div>
        {/*/.section-header*/}
        {paragraf[0]?.paragraf1 && (
          <p style={{ marginTop: 30, marginLeft: "20px" }}>
            {paragraf[0]?.paragraf1}
          </p>
        )}
        {paragraf[0]?.paragraf2 && (
          <p style={{ marginTop: 30, marginLeft: "20px" }}>
            {paragraf[0]?.paragraf2}
          </p>
        )}
        {paragraf[0]?.paragraf3 && (
          <p style={{ marginTop: 30, marginLeft: "20px" }}>
            {paragraf[0]?.paragraf3}
          </p>
        )}
        {paragraf[0]?.paragraf4 && (
          <p style={{ marginTop: 30, marginLeft: "20px" }}>
            {paragraf[0]?.paragraf4}
          </p>
        )}
        {paragraf[0]?.paragraf5 && (
          <p style={{ marginTop: 30, marginLeft: "20px" }}>
            {paragraf[0]?.paragraf5}
          </p>
        )}
        {paragraf[0]?.paragraf6 && (
          <p style={{ marginTop: 30, marginLeft: "20px" }}>
            {paragraf[0]?.paragraf6}
          </p>
        )}


      </div>
    </section>
  );
};
