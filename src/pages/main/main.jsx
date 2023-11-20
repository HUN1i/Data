import Header from "../../components/header/header";
import {
  BodyDiv,
  SkyBlueCard,
  PinkCard,
  BodyInnerDiv,
  GreenCard,
} from "./style";

const MainPage = () => {
  return (
    <div>
      <Header />
      <BodyDiv>
        <BodyInnerDiv>
          <SkyBlueCard
            to="/onsil"
            style={{ textDecoration: "none", color: "black" }}
          >
            온실가스 배출량
          </SkyBlueCard>
          <PinkCard
            to="/umsu"
            style={{ textDecoration: "none", color: "black" }}
          >
            음식물쓰레기 발생량 추정 정보
          </PinkCard>
          <GreenCard
            to="/hasu"
            style={{ textDecoration: "none", color: "black" }}
          >
            하수처리시설 방류 수질 현황
          </GreenCard>
        </BodyInnerDiv>
        <br></br>
      </BodyDiv>
    </div>
  );
};

export default MainPage;
