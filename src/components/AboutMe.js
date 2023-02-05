import styled from 'styled-components'

const AboutMe = () => {
    return(
        <AboutMeDetails>
            <h2>About me</h2>
            <p>Welcome! I'm Kevin, a full-stack web developer and recent graduate of Flatiron School. I transitioned into the software engineering field <br/>
            after a combined 8 years of field work and Project Management in the Telecommunications industry. </p>
        </AboutMeDetails>
    )
}

export default AboutMe

const AboutMeDetails = styled.div`
border: 2px solid green;
height: 50vh;
width: 50vw;
`