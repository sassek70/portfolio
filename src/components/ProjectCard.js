import styled from "styled-components"
import {FaGithub} from 'react-icons/fa'
import { IoLogoYoutube } from "react-icons/io5"
import { useContext } from "react"
import { ResolutionContext } from "../context/ResolutionContext"



const ProjectCard = ({id, title, image, description, repoLink, url, demoVideo, embedId, technologies}) => {
    const {iconSize} = useContext(ResolutionContext)

    let displayTechnologies = technologies.map((technology, index) => {
        return (
            <div key={index}>
                {technology}
            </div>
        )}
    )
    // console.log(technologies)

    return (
        <Card>
            <h2>{title}</h2>
            <ProjectImage src={image}/>
            <Details>{description}
            </Details>
            <TechImagesContainer>
                <LinksContainer>
                    <LinkIcon href={repoLink} target='_blank' rel='noreferrer'><FaGithub size={iconSize}/></LinkIcon>
                    <LinkIcon href={demoVideo} target='_blank' rel='noreferrer'><IoLogoYoutube size={iconSize}/></LinkIcon>
                </LinksContainer>
                <TechImages key={id} iconSize={iconSize}>{displayTechnologies}</TechImages>
             </TechImagesContainer>
        </Card>

    )

}

export default ProjectCard

const TechImages = styled.div`
svg{
    height: ${props => (props.iconSize)}px;
    width: ${props => (props.iconSize)}px;
}
display: flex;
flex-direction: row;
justify-content: right;
flex-grow: 2;
align-self: auto;
column-gap: 10px;
`


const Card = styled.div`
max-width: 600px;
border: 2px solid #ffbf30;
padding: 5px;
display: flex;
flex-direction: column;
border-radius: 20px;
align-items: center;
color: #ffbf30;
box-shadow: 0px 0px 10px 1px;

&:hover {
    background-color: #ba4a00;
    border-color: #ffbf30;
    transition-duration: 0.75s;
    color: #fdebd0;
}

&:hover h2 {
    color: #2e1f09;
    transition-duration: 0.75s;

}

&:hover a {
    color: #2e1f09;
    transition-duration: 0.75s;

}

&:hover ${TechImages} {
    color: #2e1f09;
    transition-duration: 0.75s;
}

`


const ProjectImage = styled.img`
max-width: 300px;
max-height: 250px;
border: 2px solid #ffbf30;
border-radius: 5px;
width: 100%;
`

const TechImagesContainer = styled.div`
display: flex;
flex-direction: row;
margin-top: auto;
width: 80%;
align-self: center;
`



const LinkIcon = styled.a`
color: inherit;
display: flex;
flex-direction: row;
justify-content: left;
flex-grow: 1;
align-self: flex-start;

&:hover {
    color: #ffbf30;
}
`

const LinksContainer = styled.div`
display: flex;
flex-direction: row;
column-gap: 10px;

`

const Details = styled.p`
padding: 10px 20px 5px 20px;
font-size: 1.25rem;
`
