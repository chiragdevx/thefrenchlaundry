import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
import bg from "./assets/bg.png";
import Homepage from "./components/Homepage";
import Products from "./components/Products";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import { productData, productDataTwo } from "./components/Products/data";

import { GlobalStyle } from "./globalStyles";

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Wrapper>
          <Navbar />
          <Homepage />
        </Wrapper>
        <Products heading="Choose your favorite" data={productData} />
        <Feature />
        <Products heading="Sweet Treats for You" data={productDataTwo} />
        <Footer />
      </Router>
    </>
  );
}



const Wrapper = styled.div`
  background-image: url(${bg});
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export default App;
