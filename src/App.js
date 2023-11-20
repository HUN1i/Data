import Main from "./pages/main/main";
import Tire from "./pages/tire/tire";
import Umsu from "./pages/umsu/umsu";
import Hasu from "./pages/hasu/hasu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/onsil" element={<Tire />}></Route>
          <Route path="/umsu" element={<Umsu />}></Route>
          <Route path="/hasu" element={<Hasu />}></Route>
        </Routes>
      </GlobalStyle>
    </BrowserRouter>
  );
}

export const GlobalStyle = styled.div`
  padding: 5px;
`;

export default App;
