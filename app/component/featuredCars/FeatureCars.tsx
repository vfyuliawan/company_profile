
"use client";

import React, { useEffect, useState } from "react";
import { CollectionReference, getDocs, query } from "@firebase/firestore";
// import { app } from "../api/firebase";
import { DocumentData, QueryDocumentSnapshot, collection, getFirestore } from "firebase/firestore";
import { app } from "@/app/api/firebase";

export const FeatureCars: React.FC = () => {

  const [data, setData] = useState<DocumentData[]>([]);;
  const [firstSet, setFirstSet] = useState<DocumentData[]>([]);
  const [secondSet, setSecondSet] = useState<DocumentData[]>([]);

  const fetchData = async () => {
    // console.log("runs");

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
      const firstSetData = documentsData.filter((item) => item.id >= '1' && item.id <= '4');
      const secondSetData = documentsData.filter((item) => item.id >= '5' && item.id <= '8');
      setFirstSet(firstSetData);
      setSecondSet(secondSetData);
        // console.log("Data fetched:", documentsData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
  fetchData();
  }, []);
    return(
        <section id="featured-cars" className="featured-cars">
        <div className="container">
          <div className="section-header">
            <p>checkout <span>the</span> featured cars</p>
            <h2>featured cars</h2>
          </div>{/*/.section-header*/}
          <div className="featured-cars-content">
            <div className="row"> {/*  item.id = 1-4 */}
              {firstSet.map((item, index) => (
                <div key={`firstSet-${index}`}  className="col-lg-3 col-md-4 col-sm-6">
                  <div className="single-featured-cars">
                    <div className="featured-img-box">
                      <div className="featured-cars-img">
                        <img src={item.picture} alt="cars" />
                      </div>
                      <div className="featured-model-info">
                        <p>
                          model: {item.desc}
                          <span className="featured-mi-span">Cap: {item.capacity} Org</span> 
                        </p>
                      </div>
                    </div>
                    <div className="featured-cars-txt">
                      <h2><a href="#">{item.name}</a></h2>
                      <h3>Rp {item.price}</h3>
                      {/* <p>
                        Neque 
                      </p> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="row"> {/* item.id = 5-8 */}
              {secondSet.map((item, index) => (
                <div key={`secondSet-${index}`} className="col-lg-3 col-md-4 col-sm-6">
                  <div className="single-featured-cars">
                    <div className="featured-img-box">
                      <div className="featured-cars-img">
                        <img src={item.picture} alt="cars" />
                      </div>
                      <div className="featured-model-info">
                        <p>
                          model: {item.desc}
                          <span className="featured-mi-span">Cap: {item.capacity} Org</span> 
                        </p>
                      </div>
                    </div>
                    <div className="featured-cars-txt">
                      <h2><a href="#">{item.name}</a></h2>
                      <h3>Rp {item.price}</h3>
                      <p>
                        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non. 
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
           
            
            
          </div>
        </div>{/*/.container*/}
      </section>
    )
}
