import AboutMe from "./AboutMe"
import Contact from "./Contact"
import Blogs from "./Blogs"
import NavBar from "./NavBar";
import styled from 'styled-components'

function App() {
  return (
    <Background>
      <NavBar />
      <AboutMe />
      <Blogs />
      <Contact/>
    </Background>
  );
}

export default App;

const Background = styled.div`
background-color: grey;
height: 100%;
width: 100vw;
display: flex;
flex-direction: column;
justify-content: center;

`

