import { Link } from "react-router-dom";
import styled from "styled-components";

export const BodyDiv = styled.div`
  width: 90%;
  height: 80vh;
  padding: 50px;
  gap: 0px;
`;

export const SkyBlueCard = styled(Link)`
  width: 40vw;
  height: 50vh;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  background-color: skyblue;
  border-radius: 10px;
`;

export const PinkCard = styled(Link)`
  width: 40vw;
  height: 50vh;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  background-color: pink;
  border-radius: 10px;
`;

export const GreenCard = styled(Link)`
  width: 40vw;
  height: 50vh;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  background-color: gainsboro;
  border-radius: 10px;
`;
export const BodyInnerDiv = styled.div`
  display: flex;
  gap: 20px;
`;
