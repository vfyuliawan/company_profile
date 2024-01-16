"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { useEffect, useState } from "react";
// import {
//   getFirestore,
//   collection,
//   CollectionReference,
//   getDocs,
//   query,
//   doc,
// } from "firebase/firestore";
// import { app } from "@/app/api/firebase";
// import { CrouselViewModel } from "./CrouselTextViewModel";
import { WebTheme } from "@/app/theme/webTheme";

export const CrouselTextComponent = () => {
  const textStatic = [
    {
      for: "Perusahaan",
      syarat:"Fotocopy : Akte pendirian, SIUP, TDP, NPWP, HO, Domisili Perusahaan (Menunjukan Asli) *Fotocopy : KTP pengguna dan KTP Direktur Perusahaan (Menunjukan aslinya) *Fotocopy : SIM A, Rekening Listrik, Rekening telepon *Uang jaminan Rp 4.000.000 atau barang yang setara *Pembatalan maks 2×24jam sebelum hari H *Biaya pembatalan 25% dari jumlah total yang telah di sepakati bersama *Kerusakan 100% di tanggung penyewa *Pemakaian di luar jateng minimal 2 hari *Denda E-tle sepenuhnya di tanggung penyewa *Overtime per jam 30% dari harga sewa *Harga jasa driver belum termasuk akomodasi driver *Sistem booking unit *Tamu yang baru / awal wajib menggunakan driver dari kami *",
    },
    {
      for: "Foreigner",
      syarat:"Copy of driving licenses *KITAP or KITAS Document *Deposit Guarantee (4,000,000 IDR) Cancellation max 2×24 hours before the big day *Cancellation fee 25% of the total amount agreed together *Damage is 100% borne by the renter *Use outside of Central Java for a minimum of 2 days *E-tle fines are fully borne by the renter *Overtime per hour 30% of rental price *Driver service prices do not include driver accommodation *Unit booking system",
    },
    {
      for: "Perorangan",
      syarat:"KTP (asli) *SIM C (Asli) *Kartu Pelajar (jika ada) *KTP + Kartu kerluarga orang tua (Untuk pelajar & mahasiswa) *Bersedia menunjukan SIM A *Bersedia untuk di survei (Menyertakan akun media sosial) *Bersedia difoto ketika serah terima dan meninggalkan 2 identitas asli (akan dikembalikan ketika sudah) *Pembatalan maks 2×24jam sebelum hari H *Biaya pembatalan 25% dari jumiah total yang telah di sepakati bersama *Kerusakan 100% di tanggung penyewa *Pemakaian di luar jateng minimal 2hari *Denda E-tle sepenuhnya di tanggung penyewa *Overtime per jam 30% dari harga sewa",
    },
    
  ];

  // const { headers } = CrouselViewModel();
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
        {textStatic.map((item, index) => {
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