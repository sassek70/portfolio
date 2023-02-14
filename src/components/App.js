import AboutMe from "./AboutMe"
import Contact from "./Contact"
import Blogs from "./Blogs"
import ScrollToSection from "./ScrollToSection";
import styled from 'styled-components'
import Projects from "./Projects";
import { useContext } from "react";
import { ResolutionContext } from "../context/ResolutionContext";

function App() {
  const {width} = useContext(ResolutionContext)

  return (
    <Background>
      {width < 800 ? null : <ScrollToSection/>}
      <ComponentContainer>
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
background-color: #2e1f09;
height: 100%;
display: flex;
flex-direction: row;
align-items: center;
`

const ComponentContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

// #9e710e -- dark
// #ffbf30 -- light
// #2e1f09 -- background