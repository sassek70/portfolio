import styled from "styled-components"
import {FaGithub, FaReact} from 'react-icons/fa'
import {SiRuby, SiRubyonrails} from 'react-icons/si'


const ProjectCard = ({title, image, description, repoLink, url, demoVideo, embedId, technologies}) => {

    console.log(image)
    return (
        <Card>
            <h2>{title}</h2>
            <ProjectImage src={image}/>
            <p>{description}</p>
            <TechImagesContainer>
                <a href={repoLink}><FaGithub size={30} style={{fill: 'black'}}/></a>
                <TechImages>{technologies}</TechImages>
             </TechImagesContainer>
        </Card>

    )

}

export default ProjectCard


const Card = styled.div`
max-width: 550px;
max-height: 300px;
border: 2px solid black;
margin: 5px;
padding: 5px;
`

const ProjectImage = styled.img`
max-width: 300px;
max-height: 250px;
`

const TechImagesContainer = styled.div`
border: 2px solid black;
display: flex;
flex-direction: row;
`

const TechImages = styled.div`
display: flex;
flex-direction: row;
justify-content: right;
flex-grow: 1;

`
const GitHubIcon = styled.a`
flex-grow: 2;
`
