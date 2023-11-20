import Header from "../../components/header/header";
import React, { useState } from "react";
import Img from "./hasu.png";
const HasuPage = () => {
  return (
    <div>
      <Header />
      <br></br>
      하수처리시설 방류 수질 현황에 대한 데이터입니다.
      <img src={Img}></img>
    </div>
  );
};

export default HasuPage;
