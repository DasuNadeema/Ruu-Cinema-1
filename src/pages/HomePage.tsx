import React from "react";
import Header from "../component/Header";
import Movie from "../component/Movie";
import Main from "../component/Main";
import Schedule from "../component/Schedule";
import Card from "../component/Card";
import Tv from "../component/Tv";
import Footer from "../component/Footer";

function HomePage() {
  return (
    <div>
      <Header />
      <Movie />
      <Main />
      <Tv />
      <Footer />
    </div>
  );
}

export default HomePage;
