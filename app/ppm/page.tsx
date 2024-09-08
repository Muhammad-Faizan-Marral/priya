"use client";
import Button from "@/Components/Button";
import Center from "@/Components/Center";
import Footer from "@/Components/Footer";
import Main from "@/Components/Main";
import PageOne from "@/Components/PageOne";
import PageThree from "@/Components/PageThree";
import PageTwo from "@/Components/PageTwo";
import Para from "@/Components/Para";
import Ppmenu from "@/Components/Ppmenu";


import React from "react";

const page = () => {
  return (
    <div>
      <Ppmenu />
      <PageOne />
      <PageTwo/>
      <PageThree/>
      <Para/>
      <Center/>
      <Main/>
      <Button/>
      <Footer/>
    </div>
  );
};

export default page;
