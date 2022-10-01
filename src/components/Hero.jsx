import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section id="hero">
      <Carousel className="container carousel-inner h-100 d-flex align-items-center">
        <Carousel.Item className="carousel-item text-center active">
          <h2 className="text-white">Best Collection</h2>
          <h1 className="text-white py-2 fw-bold">NEW ARRIVALS</h1>
          <Link to="/product" className="btn">
            SHOP NOW
          </Link>
        </Carousel.Item>
        <Carousel.Item className="carousel-item text-center">
          <h2 className="text-white">Best Price & Offer</h2>
          <h1 className="text-white py-2 fw-bold">NEW SEASON</h1>
          <Link to="/product" className="btn">
            BUY NOW
          </Link>
        </Carousel.Item>
        <Carousel.Item className="carousel-item text-center">
          <h2 className="text-white">Best Time To Buy</h2>
          <h1 className="text-white py-2 fw-bold">SUMMER SALE</h1>
          <Link to="/product" className="btn">
            GET IT NOW
          </Link>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}
