import styled from 'styled-components'

const AboutMe = () => {
    return(
        <AboutMeDetails id="about-me">
                <MyImage src='/images/me.jpg'/>
            <Details>
                <h2>About me</h2>
                <p>Welcome! I'm Kevin, a full-stack web developer and recent graduate of Flatiron School. I transitioned into the software engineering field
                after a combined 8 years of field work and Project Management in the Telecommunications industry. </p>
            </Details>
        </AboutMeDetails>
    )
}

export default AboutMe

const AboutMeDetails = styled.section`
display: flex;
height: 100vh;
padding: 100p;
color:  #ffbf30 ;
justify-content: center;
align-items: center;
`

const MyImage = styled.img`
max-width: 300px;
max-height: 250px;
border: 2px solid #ffbf30;
border-radius: 5px;
`

const Details = styled.div`
padding: 30px;
max-width: 500px;
font-size: 1.5rem;
`