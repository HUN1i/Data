import Header from "../../components/header/header";
import React, { useState } from "react";
import Img from "./onsil.png";
const TirePage = () => {
  return (
    <div>
      <Header />
      <br></br>
      온실가스 분출량에 대한 데이터입니다.
      <img src={Img}></img>
    </div>
  );
};

export default TirePage;
