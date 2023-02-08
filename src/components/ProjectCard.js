import styled from "styled-components"
import {FaGithub} from 'react-icons/fa'



const ProjectCard = ({title, image, description, repoLink, url, demoVideo, embedId, technologies}) => {

    return (
        <Card>
            <h2>{title}</h2>
            <ProjectImage src={image}/>
            <Details>{description}</Details>
            <TechImagesContainer>
                <Octocat href={repoLink} target='_blank' rel='noreferrer'><FaGithub size={40}/></Octocat>
                <TechImages>{technologies}</TechImages>
             </TechImagesContainer>
        </Card>

    )

}

export default ProjectCard


const Card = styled.div`
max-width: 600px;
border: 2px solid #ffbf30;
margin: 10px 15px 10px 15px;
padding: 5px;
display: flex;
flex-direction: column;
border-radius: 20px;
align-items: center;
color: #ffbf30;
`

const ProjectImage = styled.img`
max-width: 300px;
max-height: 250px;
border: 2px solid #ffbf30;
border-radius: 5px;
`

const TechImagesContainer = styled.div`
border: 2px solid black;
display: flex;
flex-direction: row;
margin-top: auto;
/* flex: 1; */
/* flex-basis: content; */
align-self: center;
`

const TechImages = styled.div`
display: flex;
flex-direction: row;
justify-content: right;
flex-grow: 2;
align-self: auto;

`

const Octocat = styled.a`
color: #ffbf30;
display: flex;
flex-direction: row;
justify-content: left;
flex-grow: 1;
align-self: flex-start;

&:hover {
    color: #9e710e;
}

`

const Details = styled.p`
padding: 10px 20px 5px 20px;
font-size: 1.25rem;
`