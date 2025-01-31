import React from "react";
import NavBar from "@/components/NavBar";
import Main from "@/components/Pages/Main";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Feature from "@/components/Pages/Feature";
import BenefitsSection from "@/components/Pages/Benefits";
import AboutSection from "@/components/About";
import StudentV from "@/components/Pages/StudentV";
import Output from "@/components/Pages/Output";
const page = () => {
  return (
    <div className="pt-[68px]">
      <nav>
        <NavBar />
      </nav>
      <Main />
      <Banner />
      <Feature />
      <div className="bg-[#F7F7F7]">
        <AboutSection />
      </div>
      <BenefitsSection />
      <Output />
      <StudentV />
      <Footer />
    </div>
  );
};

export default page;
