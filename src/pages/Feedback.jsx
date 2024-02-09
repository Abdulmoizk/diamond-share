import React from "react";
import Header from "../components/Header";
import "./home/css/Style.scss";
import FeedbackCard from "../components/CardFeedback";
import Footer from "../components/Footer";
const FeedbackPage = () => {
  return (
    <div className="ccontainer">
      <Header />
      <FeedbackCard />
      <Footer />
        
    </div>
  );
};

export default FeedbackPage;
