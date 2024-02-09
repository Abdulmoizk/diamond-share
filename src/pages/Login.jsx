import React from "react";
import Header from "../components/Header";
import "./home/css/Style.scss";
import LoginCard from "../components/CardLogin";
import Footer from "../components/Footer";
const LoginPage = () => {
  return (
    <div className="ccontainer">
      <Header />
      <LoginCard/>
      <Footer/>
    </div>
  );
};

export default LoginPage;
