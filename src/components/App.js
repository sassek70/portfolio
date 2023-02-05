import AboutMe from "./AboutMe"
import Contact from "./Contact"
import Projects from "./Projects"
import NavBar from "./NavBar";
import styled from 'styled-components'

function App() {
  return (
    <Background>
      <NavBar />
      <AboutMe />
      <Projects />
      <Contact/>
    </Background>
  );
}

export default App;

const Background = styled.div`
background-color: grey;
height: 100vh;
width: 100vw;

`