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
import { CrouselViewModel } from "./CrouselTextViewModel";
import { WebTheme } from "@/app/theme/webTheme";

export const CrouselTextComponent = () => {
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
    <div style={{marginBottom:"100px", backgroundColor:WebTheme.cardGrey5}}>
      <div className="section-header" style={{ paddingTop: "15px" }}>
        <h2 style={{ marginTop: "5px", fontSize: "20px" }}>Term And Condition</h2>
      </div>
      <Slider {...settings}>
        {headers.map((item: ResultTextInterfaceData, index: number) => {
          const splitSyarat = item.syarat.split("*");
          return (
            <div key={index + "fgsfgadfasdd"} style={{}}>
              <div
                className=""
                style={{ backgroundColor: WebTheme.cardGrey5, padding: "10px" }}
              >
                <div className="" style={{ paddingLeft:"15%"}}>
                  <h1 style={{fontSize:"18px", marginBottom:"10px"}}> {item.for}</h1>
                  {splitSyarat.map((item2, index) => (
                    <p key={index + "dfahgjpoja;"} style={{fontSize:'14px'}}>
                      {"-"} {item2}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
