"use client";

import { app } from "@/app/api/firebase";
import {
  CollectionReference,
  DocumentData,
  collection,
  getDocs,
  getFirestore,
  query,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { CrouselComponent } from "../crousel/CrouselView";
import { HomeViewModel } from "./HomeViewModel";

export const HomeView = () => {
  const [desc, setDesc] = useState<DocumentData[]>([]);
  const { cars, getCars, getHarga, price } = HomeViewModel();

  const getDescription = async () => {
    try {
      const firestore = getFirestore(app);
      const collectionRef: CollectionReference = collection(
        firestore,
        "headers"
      );
      const querySnapshot = await getDocs(query(collectionRef));

      const documentsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setDesc(documentsData);

      // console.log("Data fetched:", documentsData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    // scrollBehavior()
    getCars();
    getDescription();
    return () => {};
  }, []);

  return (
    <div>
      <section id="home" className="welcome-hero">
        <div className="top-area">
          <div className="header-area">
            <nav
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                backgroundColor: "black",
              }}
              className="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy scroll"
              data-minus-value-desktop={70}
              data-minus-value-mobile={55}
              data-speed={1000}
            >
              <div className="container">
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle"
                    data-toggle="collapse"
                    data-target="#navbar-menu"
                  >
                    <i className="fa fa-bars" />
                  </button>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <a className="navbar-brand" href="index.html">
                      syadida
                      <span />
                    </a>
                  </div>
                </div>
                <div
                  className="collapse navbar-collapse menu-ui-design"
                  id="navbar-menu"
                >
                  <ul
                    className="nav navbar-nav navbar-right"
                    data-in="fadeInDown"
                    data-out="fadeOutUp"
                  >
                    <li className=" scroll  ">
                      <Link
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-70} // Adjust for your header height
                        duration={500}
                      >
                        Home
                      </Link>
                    </li>
                    <li className="scroll">
                      <Link
                        activeClass="active"
                        to="about-us"
                        spy={true}
                        smooth={true}
                        offset={-70} // Adjust for your header height
                        duration={500}
                      >
                        About Us
                      </Link>
                    </li>
                    <li className="scroll">
                      <Link
                        activeClass="active"
                        to="service"
                        spy={true}
                        smooth={true}
                        offset={-70} // Adjust for your header height
                        duration={500}
                      >
                        Service
                      </Link>
                    </li>
                    <li className="scroll">
                      <Link
                        activeClass="active"
                        to="featured-cars"
                        spy={true}
                        smooth={true}
                        offset={-70} // Adjust for your header height
                        duration={500}
                      >
                        featured
                      </Link>
                    </li>
                    {/* <li className="scroll">
                      <Link
                        activeClass="active"
                        to="new-cars"
                        spy={true}
                        smooth={true}
                        offset={-70} // Adjust for your header height
                        duration={500}
                      >
                        new cars
                      </Link>
                    </li> */}
                    <li className="scroll">
                      <Link
                        activeClass="active"
                        to="brand"
                        spy={true}
                        smooth={true}
                        offset={-70} // Adjust for your header height
                        duration={500}
                      >
                        Term Condition{" "}
                      </Link>
                    </li>
                    <li className="scroll">
                      <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70} // Adjust for your header height
                        duration={500}
                      >
                        contact{" "}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
          <div className="clearfix" />
        </div>
        <div className="container">
          <div className="welcome-hero-txt">
            <h2>{desc[0]?.content1}</h2>
            <p>{desc[0]?.content2}</p>
            <a href="https://wa.me/082133438083">
              <button className="welcome-btn">Contact Us</button>
            </a>
          </div>
        </div>
        {searchContent()}
      </section>
    </div>
  );

  function searchContent() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="model-search-content">
              <div
                className="row"
                style={{ paddingLeft: "10%", paddingRight: "10%" }}
              >
                <div className="single-model-search col-md-12">
                  <h2>select model</h2>
                  <div className="model-select-icon">
                    <select
                      className="form-control"
                      onChange={(e) => {
                        console.log("cekValue", e.target.value);
                        getHarga(e.target.value);
                      }}
                    >
                      <option value="" selected>
                        {" "}
                        - Pilih -{" "}
                      </option>
                      {cars.map((item: CarInterFace, index: number) => {
                        return <option key={index} value={item.id}> {item.name}</option>;
                      })}
                    </select>
                    {/* /.select*/}
                  </div>
                  {/* /.model-select-icon */}
                </div>
                <div className="single-model-search col-md-12">
                  <h2>select price</h2>
                  <div className="model-select-icon">
                    <select className="form-control" disabled>
                      <option value="default">{price}</option>
                    </select>
                    {/* /.select*/}
                  </div>
                  {/* /.model-select-icon */}
                </div>
                {/* <div className="col-md-12 "> 
            <div className="single-model-search text-center"> 
              <button className="welcome-btn model-search-btn" > 
                search 
              </button> 
            </div> 
          </div>  */}
              </div>
            </div>
          </div>
        </div>
        <div id="scroll-Top">
          <div className="return-to-top">
            <i
              className="fa fa-angle-up "
              id="scroll-top"
              data-toggle="tooltip"
              data-placement="top"              
              data-original-title="Back to Top"
              aria-hidden="true"
            />
          </div>
        </div>
        <div>
          <a href="https://wa.me/082133438083" className="floating-button1">
            <i className="fa fa-phone" /> WhatsApp 1
          </a>
          <a href="https://wa.me/081221951242" className="floating-button2">
            <i className="fa fa-phone" /> WhatsApp 2
          </a>
        </div>
      </div>
    );
  }
};
