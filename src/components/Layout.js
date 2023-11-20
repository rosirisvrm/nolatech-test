import React from "react";
import { Header } from "./Header"; 
import { Hero } from "./Hero"; 
import { CountDown } from "./CountDown"; 
import { AboutUs } from "./AboutUs"; 
import { Services } from "./Services"; 
import { CallToAction } from "./CallToAction"; 
import { MobileApp } from "./MobileApp"; 
import { Footer } from "./Footer";
import { JoinUs } from "./JoinUs";
import { LatestVideos } from "./LatestVideos";
import { Carousel } from "./Carousel";

const Layout = () => {
    return (
        <>
            <Header />
            <Hero />
            <CountDown />
            <AboutUs />
            <Services />
            <CallToAction />
            <LatestVideos />
            <JoinUs />
            <MobileApp />
            <Carousel />
            <Footer />
        </>
    )
}

export { Layout };