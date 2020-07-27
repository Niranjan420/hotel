import React from "react";
import Hero from "../components/Hero";

export default function home() {
  return <Hero hero="defaultHero"></Hero>;
}

Hero.defaultProps = {
  hero: "defaultHero",
};
