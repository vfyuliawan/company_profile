"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  CollectionReference,
  getDocs,
  query,
  doc,
} from "firebase/firestore";
import { app } from "@/app/api/firebase";
import { CrouselViewModel } from "./CrouselViewModel";

export const CrouselComponent = () => {
  const { headers } = CrouselViewModel();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div style={{}}>
      <Slider {...settings}>
        {headers.map((item: ResultInterfaceData, index: number) => {
          return (
            <div key={index + "fgsfgadfasdd"} className="welcome-hero">
              <div
                className=""
                style={{
                  backgroundImage: `url('${item.image}')`,
                  backgroundSize: "cover",
                }}
              >
                <div className="welcome-hero-txt">
                  <h2>{item.content1}</h2>
                  <p>{item.content2}</p>
                  <a href="ad#aboutus">
                    <button className="welcome-btn" onClick={() => {}}>
                      Read More
                    </button>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
