import React from "react";
import Header from "../components/Header";
import "./home/css/Style.scss";
import SignupCard from "../components/CardSignup";
import Footer from "../components/Footer";
const RegisterPage = () => {
  return (
    <div className="ccontainer">
      <Header />
      <SignupCard/>
      <Footer/> 
    </div>
  );
};

export default RegisterPage;
