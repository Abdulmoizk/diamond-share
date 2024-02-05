import React from "react";
import { Button, Result } from "antd";
import { Link } from "react-router-dom";
import './css/Style.scss';


const PageNotExist = () => {
    const linkstyle={
        textDecoration: "none"
    }
  return (
    <>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button className="back-btn"><Link to={'/'} style={linkstyle}>Back Home</Link></Button>}
      />

    </>
  );
};

export default PageNotExist;
