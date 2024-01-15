"use client";

import React, { useEffect, useState } from "react";
import { CollectionReference, getDocs, query } from "@firebase/firestore";
import { DocumentData, QueryDocumentSnapshot, collection, getFirestore } from "firebase/firestore";
import { app } from "@/app/api/firebase";

export const ContactView = () => {

  

  const [data, setData] = useState<DocumentData[]>([]);
  const [firstSet, setFirstSet] = useState<DocumentData[]>([]);
  const [secondSet, setSecondSet] = useState<DocumentData[]>([]);
  const [firstData, setFirstData] = useState<DocumentData[]>([]);

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

      const contactsCollectionRef: CollectionReference = collection(
        firestore,
        "contacts"
      );

      const contactsCollectionQuerySnapshot = await getDocs(
        query(contactsCollectionRef)
      );
  
      const contactsCollectionDocumentsData = contactsCollectionQuerySnapshot.docs.map(
        (doc) => ({
          id: doc.id,
          ...doc.data(),
        })
      );

      console.log("cekDokument", contactsCollectionDocumentsData);
      
  
      setFirstData(contactsCollectionDocumentsData);

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  console.log("cekfirstData" , firstData);
  

  useEffect(() => {
  fetchData();
  }, []); 

    return (
        <footer id="contact" className="contact">
        <div className="container">
          <div className="footer-top">
            <div className="row">
              <div className="col-md-3 col-sm-6">
              <div key={`firstData-$12312 `} className="single-footer-widget">
                  <div className="footer-logo">
                    <a href="index.html">Syadida Rent</a>
                  </div>
                  <p>
                    Alamat: JL Meranti Raya no 55 Banyumanik, Semarang
                  </p>
                  <p>
                    cabang 1: JL Duta Indah no 19-21 Banyumanik. Semarang
                  </p>
                  <div className="footer-contact">
                    <p>syadidarent@gmail.com</p>
                    <p>082133438083 </p>
                    <p>081328629304</p>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-sm-6">
                <div className="single-footer-widget">
                  <h2>about Syadida</h2>
                  <ul>
                    <li><a href="#">about us</a></li>
                    {/* <li><a href="#">career</a></li> */}
                    <li><a href="#">terms <span> of service</span></a></li>
                    {/* <li><a href="#">privacy policy</a></li> */}
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-xs-12">
                <div className="single-footer-widget">
                  <h2>top brands</h2>
                  <div className="row">
                    <div className="col-md-7 col-xs-6">
                    {firstSet.map((item, index) => (
                      <ul key={`firstSet-${index}`}>
                        <li><a href="#">{item.name}</a></li>
                      </ul>
                    ))}
                    </div>
                    <div className="col-md-5 col-xs-6">
                      {secondSet.map((item, index) => (
                      <ul key={`secondSet-${index}`}>
                        <li><a href="#">{item.name}</a></li>
                      </ul>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-offset-1 col-md-3 col-sm-6">
                <div className="single-footer-widget">
                  <h2>news letter</h2>
                  <div className="footer-newsletter">
                    <p>
                      Subscribe to get latest news  update and informations
                    </p>
                  </div>
                  <div className="hm-foot-email">
                    <div className="foot-email-box">
                      <input type="text" className="form-control" placeholder="Add Email" />
                    </div>{/*/.foot-email-box*/}
                    <div className="foot-email-subscribe">
                      <span><i className="fa fa-arrow-right" /></span>
                    </div>{/*/.foot-email-icon*/}
                  </div>{/*/.hm-foot-email*/}
                </div>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="row">
              <div className="col-sm-6">
                <p>
                  {/* © copyright.designed and developed by <a href="https://www.themesine.com/">themesine</a>. */}
                  © copyright. developed by Gavik.
                </p>{/*/p*/}
              </div>
              <div className="col-sm-6">
                <div className="footer-social">
                  <a href="#"><i className="fa fa-facebook" /></a>	
                  <a href="#"><i className="fa fa-instagram" /></a>
                  <a href="#"><i className="fa fa-linkedin" /></a>
                  <a href="#"><i className="fa fa-pinterest-p" /></a>
                  <a href="#"><i className="fa fa-behance" /></a>	
                </div>
              </div>
            </div>
          </div>{/*/.footer-copyright*/}
        </div>{/*/.container*/}
        <div id="scroll-Top">
          <div className="return-to-top">
            <i className="fa fa-angle-up " id="scroll-top" data-toggle="tooltip" data-placement="top"  />
          </div>
        </div>{/*/.scroll-Top*/}
      </footer>
    )
}