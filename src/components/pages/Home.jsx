import React from "react";
import Hero from "../Hero";
import Products from "../../components/pages/Products";
import Specials from "../Specials";
import Banner from "../Banner";
import Blogs from "../Blogs";
import Footer from "../Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <Specials />
      <Banner />
      <Blogs />
      <Footer />
    </>
  );
}
