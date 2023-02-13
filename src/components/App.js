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
width: 100vw;
display: flex;
flex-direction: row;
/* justify-content: center; */
align-items: center;

`

const ComponentContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
/* padding: 30px; */
/* padding: 30px 100px 30px 100px; */
/* @media screen { */
  
/* } */

/* width: 100%; */
/* flex-grow: 1; */
`

