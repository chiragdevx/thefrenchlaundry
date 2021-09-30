
import Navbar from "./components/Navbar";
import styled from 'styled-components'
import bg from './assets/bg.png'
import Homepage from "./components/Homepage";
import Aboutus from "./components/Aboutus";

function App() {
  return (
    <>
      <Container>
        <Wrapper>

          <Navbar />

          <Homepage/>
         
        </Wrapper>
     
      </Container>
     
    </>

  );
}

const Container = styled.div`
  background : #ffffff;
  position :fixed;
  top:0;
  left:0;
  bottom:0;
  right:0;

`;

const Wrapper = styled.div`
background-image: url(${bg});
width:100%;
height: 100%;
background-size:cover;
background-position:center;
background-repeat: no-repeat;
`;

export default App;




