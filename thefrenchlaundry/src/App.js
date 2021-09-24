
import Navbar from "./components/Navbar";
import styled from 'styled-components'
import bg from './assets/bg.jpg'

function App() {
  return (
    <>
      <Container>
        <Wrapper>

          <Navbar></Navbar>

          <div>hi there</div>
        </Wrapper>

      </Container>

    </>

  );
}

const Container = styled.div`
  background : #000000;
 
`;

const Wrapper = styled.div`
background-image: url(${bg});
`;

export default App;




