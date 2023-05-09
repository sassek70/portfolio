import styled from 'styled-components'
import {FaLinkedin, FaGithub, FaDev} from 'react-icons/fa'
import { useContext } from 'react'
import { ResolutionContext } from '../context/ResolutionContext'

const Contact = () => {
    const {iconSize} = useContext(ResolutionContext)

    return(
        <ContactDetails id="contact">
            <Details>
                <h2>Let's Connect!</h2>
                <LinkContainer>
                    <Icon href='https://www.linkedin.com/in/kevin-sasse/' target='_blank' rel='noreferrer'><FaLinkedin size={iconSize}/></Icon>
                    <Icon href='https://dev.to/sassek70' target='_blank' rel='noreferrer'><FaDev size={iconSize}/></Icon>
                    <Icon href='https://github.com/sassek70' target='_blank' rel='noreferrer'><FaGithub size={iconSize}/></Icon>
                </LinkContainer>
                <Resume as='a' href='https://docs.google.com/document/d/14bWmdC2SpvKi1FyEOjhnbnPUsKPy8cnYTqo9jfDIkQg/edit?usp=sharing'>Resume</Resume>
            </Details>
        </ContactDetails>
    )
}

export default Contact

const ContactDetails = styled.section`
display: flex;
height: 100vh;
color:  #ffbf30 ;
justify-content: center;
align-items: center;
`
const Details = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 500px;
font-size: 1.5rem;
top: 50%;
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

const Resume = styled.a`
padding: 10px 30px;
margin-top: 15px;
background-color: #2e1f09;
color: #ffbf30;
text-decoration: none;
border: 2px solid #ffbf30;
border-radius: 20px;
overflow: hidden;
transition: 0.5s;
cursor: pointer;

&:hover{
    background: #9e710e;
    color: #2e1f09;
    box-shadow: 0 0 5px 1px #ffbf30,
                0 0 15px 1px #ffbf30,
                0 0 30px 1px #9e710e,
                0 0 50px 1px #9e710e;
}
`


