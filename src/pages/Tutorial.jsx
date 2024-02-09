import React from "react";
import Header from "../components/Header";
import "./home/css/Style.scss";
import Footer from "../components/Footer";
import Tutorial from "../components/Tutorial";
const TutorialPage = () => {
  return (
    <div className="ccontainer">
      <Header />
      <Tutorial />
      <Footer />
    </div>
  );
};

export default TutorialPage;
