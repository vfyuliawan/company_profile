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

export const HomeView = () => {
  const [desc, setDesc] = useState<DocumentData[]>([]);

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

      console.log("Data fetched:", documentsData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const scrollBehavior = () => {
    // Add smooth scroll behavior to all links with the 'scroll' class
    const links = document.querySelectorAll(".scroll");

    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();

        const targetId = link?.getAttribute("href")?.substring(1);
        const targetElement = document.getElementById(targetId ?? "");

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 70, // Adjust for your header height
            behavior: "smooth",
          });
        }
      });
    });
  };

  useEffect(() => {
    // scrollBehavior()
    getDescription();
    return () => {};
  }, []);

  return (
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
                  <li className="scroll">
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
                  </li>
                  <li className="scroll">
                    <Link
                      activeClass="active"
                      to="brand"
                      spy={true}
                      smooth={true}
                      offset={-70} // Adjust for your header height
                      duration={500}
                    >
                      brands{" "}
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
          <a href="#aboutus">
            <button className="welcome-btn" onClick={() => {}}>
              Read More
            </button>
          </a>
        </div>
      </div>
      {/* {searchContent()} */}
    </section>
  );

  function searchContent() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="model-search-content">
              <div className="row">
                <div className="col-md-offset-1 col-md-2 col-sm-12">
                  <div className="single-model-search">
                    <h2>select year</h2>
                    <div className="model-select-icon">
                      <select className="form-control">
                        <option value="default">year</option>
                        <option value={2018}>2018</option>
                        <option value={2017}>2017</option>
                        <option value={2016}>2016</option>
                      </select>
                    </div>
                  </div>
                  <div className="single-model-search">
                    <h2>body style</h2>
                    <div className="model-select-icon">
                      <select className="form-control">
                        <option value="default">style</option>
                        <option value="sedan">sedan</option>
                        <option value="van">van</option>
                        <option value="roadster">roadster</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-offset-1 col-md-2 col-sm-12">
                  <div className="single-model-search">
                    <h2>select make</h2>
                    <div className="model-select-icon">
                      <select className="form-control">
                        <option value="default">make</option>
                        <option value="toyota">toyota</option>
                        <option value="holden">holden</option>
                        <option value="maecedes-benz">maecedes-benz.</option>
                      </select>
                    </div>
                  </div>
                  <div className="single-model-search">
                    <h2>car condition</h2>
                    <div className="model-select-icon">
                      <select className="form-control">
                        <option value="default">condition</option>
                        <option value="something">something</option>
                        <option value="something">something</option>
                        <option value="something">something</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-offset-1 col-md-2 col-sm-12">
                  <div className="single-model-search">
                    <h2>select model</h2>
                    <div className="model-select-icon">
                      <select className="form-control">
                        <option value="default">model</option>
                        <option value="kia-rio">kia-rio</option>
                        <option value="mitsubishi">mitsubishi</option>
                        <option value="ford">ford</option>
                      </select>
                    </div>
                  </div>
                  <div className="single-model-search">
                    <h2>select price</h2>
                    <div className="model-select-icon">
                      <select className="form-control">
                        <option value="default">price</option>
                        <option value="$0.00">$0.00</option>
                        <option value="$0.00">$0.00</option>
                        <option value="$0.00">$0.00</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 col-sm-12">
                  <div className="single-model-search text-center">
                    <button className="welcome-btn model-search-btn">
                      search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
