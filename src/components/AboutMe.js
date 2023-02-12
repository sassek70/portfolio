import styled from 'styled-components'
import {SiNextdotjs, SiTypescript} from 'react-icons/si'
import { FaAws } from 'react-icons/fa'

const AboutMe = () => {

    const nowLearning = [<SiNextdotjs size={30}/>, <SiTypescript size={30}/>, <FaAws size={30}/>]

    return(
        <AboutMeDetails id="about-me">
                <MyImage src='/images/me.jpg'/>
            <Details>
                <H2>About me</H2>
                <p>Welcome! I'm Kevin, a full-stack web developer and recent graduate of Flatiron School. I transitioned into the software engineering field
                after a combined 8 years of field work and Project Management in the Telecommunications industry. </p>
                <H3>What I'm currently learning:</H3>
                <TechImages>
                    {nowLearning}
                </TechImages>
            </Details>
        </AboutMeDetails>
    )
}

export default AboutMe

const AboutMeDetails = styled.section`
display: flex;
flex-direction: row;
column-gap: 40px;
min-height: 100vh;
padding: 10px;
color:  #ffbf30 ;
justify-content: center;
align-items: center;
flex-wrap: wrap;
min-height: 100vh;
/* width: 100%; */
`

const MyImage = styled.img`
width: 100%;
max-width: 500px;
border: 2px solid #ffbf30;
border-radius: 5px;
box-shadow: 0px 0px 10px 1px;
`

// const MyImage = styled.img`
// max-width: 500px;
// max-height: 450px;
// border: 2px solid #ffbf30;
// border-radius: 5px;
// box-shadow: 0px 0px 10px 1px;
// `

const Details = styled.div`
padding: 30px;
max-width: 500px;
font-size: 1.5rem;
`

const TechImages = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
flex-grow: 2;
align-self: auto;
column-gap: 20px;
`

const H2 = styled.h2`
color: #fdebd0;
`

const H3 = styled.h3`
color: #fdebd0;
`