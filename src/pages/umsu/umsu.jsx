import Header from "../../components/header/header";
import React, { useState } from "react";
import Img from "./umsu.png";
const UmsuPage = () => {
  return (
    <div>
      <Header />
      <br></br>
      음식물쓰레기 발생량 추정 정보입니다.
      <img src={Img}></img>
    </div>
  );
};

export default UmsuPage;
