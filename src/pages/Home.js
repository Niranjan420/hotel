import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

export default function home() {
  return (
    <Hero hero="defaultHero">
      <Banner title="Luxurious Rooms" subtitle="Deluxe Rooms starting at $299">
        <Link to="/rooms" className="btn-primary">
          Our Rooms
        </Link>
      </Banner>
    </Hero>
  );
}

Hero.defaultProps = {
  hero: "defaultHero",
};
