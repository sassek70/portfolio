import AboutMe from "./AboutMe"
import Contact from "./Contact"
import Blogs from "./Blogs"
import NavBar from "./NavBar";
import styled from 'styled-components'
import Projects from "./Projects";

function App() {
  return (
    <Background>
      <ComponentContainer>
        <NavBar/>
        <AboutMe/>
        <Projects/>
        <Blogs/>
        <Contact/>
      </ComponentContainer>
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
align-items: center;

`

const ComponentContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 30px;
`

