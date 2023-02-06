import styled from "styled-components"
import {FaGithub} from 'react-icons/fa'


const ProjectCard = ({title, logo, description, repoLink, url, demoVideo, embedId, technologies}) => {

    return (
        <Card>
            <h2>{title}</h2>
            <Logo src={`/images/${logo}`}/>
            <p>{description}</p>
            <TechImagesContainer>
                <a href={repoLink}><FaGithub size={30} style={{fill: 'black'}}/></a>
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

const Logo = styled.img`
max-width: 100px;
max-height: 100px;
`

const TechImagesContainer = styled.div`
border: 2px solid black;
display: flex;
flex-direction: row;
`