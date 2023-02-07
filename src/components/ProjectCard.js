import styled from "styled-components"
import {FaGithub} from 'react-icons/fa'



const ProjectCard = ({title, image, description, repoLink, url, demoVideo, embedId, technologies}) => {

    return (
        <Card>
            <h2>{title}</h2>
            <ProjectImage src={image}/>
            <p>{description}</p>
            <TechImagesContainer>
                <Octocat href={repoLink}><FaGithub size={30} style={{fill: 'black'}}/></Octocat>
                <TechImages>{technologies}</TechImages>
             </TechImagesContainer>
        </Card>

    )

}

export default ProjectCard


const Card = styled.div`
max-width: 600px;
border: 2px solid black;
margin: 10px 15px 10px 15px;
padding: 5px;
display: flex;
flex-direction: column;
border-radius: 20px;
align-items: center;
`

const ProjectImage = styled.img`
max-width: 300px;
max-height: 250px;
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
display: flex;
flex-direction: row;
justify-content: left;
flex-grow: 1;
align-self: flex-start;

`