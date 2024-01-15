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
import React from "react";
import { useEffect, useState } from "react";

interface ParagrafInterface {
  paragraf1: string;
  paragraf2?: string;
  paragraf3?: string;
  paragraf4?: string;
}

export const AboutUsView = () => {
  

  return (
    <section
      id="about-us"
      style={{ marginTop: 100, backgroundColor: WebTheme.cardGrey5 }}
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
        <div className="section-header" style={{ marginTop: 20, fontSize: "30px" }}>
          <h2>Tentang Kami</h2>
        </div>
        {/*/.section-header*/}
        <div style={{  paddingRight:"150px", paddingLeft:"150px",marginTop: 20, marginLeft: "30px", fontSize: "12px" }}>        
            
              <p >
              Selamat datang di website Syadida rent Mobil Semarang, solusi utama bagi Anda yang mencari mobil rental di daerah Semarang, kami berdedikasi untuk selalu memberikan yang terbaik bagi pelanggan kami.
              </p> 
                <br/>          
              <p>
                Berdiri pada tahun 2011 di Semarang, Perusahaan kami sudah sangat berpengalaman di bidang penyewaan mobil, dengan jaminan mobil yang berkualitas dan nyaman dengan harga yang bersahabat !
              </p>
                <br/>            
              <p>
                Kami berkomitmen kuat bahwa pada dasarnya jasa kami lah yang menentukan masa depan kelangsungan perusahaan, hal inilah yang menjadikan kami senantiasa berusaha memberikan pelayanan terbaik bagi pelanggan. Dengan harga yang sangat kompetitif kami layani Anda tanpa trik dan rekayasa yang bisa merugikan Anda. Percayakan perjalanan anda khususnya di kotaSemarang, Yogyakarta, Solo, Surabaya, Jakarta, Bali, Malang, Bandung, dan sekitarnya kepada kami dan kami akan berusaha yang terbaik untuk anda.
              </p>
                <br/>            
              <p>
                Sebagai pelanggan cerdas dalam menentukan sewa mobil, hal yang paling mendasar adalah HARGA MURAH, MOBIL BAGUS DAN TERAWAT, DRIVER HANDAL DAN BERPENGALAMAN!!!!
              </p>
            <br/>
            
            
        </div>
      </div>
    </section>
  );
};
