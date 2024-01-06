import Image from "next/image";
import styles from "./page.module.css";
import { Fragment, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { HomeView } from "./component/home/HomeView";
import { ServiceVieiw } from "./component/service/ServiceView";
import { CarsView } from "./component/cars/CarsView";
import { FeatureCars } from "./component/featuredCars/FeatureCars";
import { OurClientSays } from "./component/ourClientSays/OurClientSays";
import { BrandView } from "./component/brand/BrandView";
import { ContactView } from "./component/contact/ContactView";
import { Headers } from "./component/headers/headers";

export default function Home() {
  return (
    <Fragment>
      {/*Add Content Here */}
      <Headers />
      <HomeView />
      <ServiceVieiw />
      <CarsView />
      <FeatureCars />
      <OurClientSays />
      <BrandView />
      <section id="blog" className="blog" />
      <ContactView />
      {/* Content Here */}
    </Fragment>
  );
}
