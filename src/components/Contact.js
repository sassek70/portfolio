import styled from 'styled-components'
import {FaLinkedin, FaGithub, FaDev} from 'react-icons/fa'

const Contact = () => {
    return(
        <ContactDetails id="contact">
            <Details>
                <h2>Let's Connect!</h2>
                <LinkContainer>
                    <Icon href='https://www.linkedin.com/in/kevin-sasse/' target='_blank' rel='noreferrer'><FaLinkedin size={40}/></Icon>
                    <Icon href='https://dev.to/sassek70' target='_blank' rel='noreferrer'><FaDev size={40}/></Icon>
                    <Icon href='https://github.com/sassek70' target='_blank' rel='noreferrer'><FaGithub size={40}/></Icon>
                </LinkContainer>


            </Details>
        </ContactDetails>
    )
}

export default Contact

const ContactDetails = styled.section`
border: 2px solid green;
display: flex;
height: 100vh;
padding: 100px;
/* width: 50vw; */
color:  #ffbf30 ;
justify-content: center;
align-items: center;
`
const Details = styled.div`
padding: 30px;
max-width: 500px;
font-size: 1.5rem;
`

const Icon = styled.a`
padding: 5px;
color: #ffbf30;
&:hover {
    color: #9e710e;
}
`

const LinkContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
`


