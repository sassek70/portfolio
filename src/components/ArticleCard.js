import styled from "styled-components"
import {FaDev} from 'react-icons/fa'
import { useContext } from "react"
import { ResolutionContext } from "../context/ResolutionContext"

const ArticleCard = ({title, url, id, description, tags, reading_time_minutes}) => {
    const {iconSize} = useContext(ResolutionContext)

    return (
        <Card>
            <h3>{title}</h3>
            <Details>{description}</Details>
            <Details>tags: {tags} {reading_time_minutes} min</Details>
            <Links href={url} target='_blank' rel='noreferrer'><FaDev size={iconSize}/></Links>
        </Card>
    )
}

export default ArticleCard

const Card = styled.div`
max-width: 500px;
border: 2px solid #ffbf30;
/* margin: 10px 15px 10px 15px; */
padding: 5px;
display: flex;
flex-direction: column;
border-radius: 20px;
align-items: center;
box-shadow: 0px 0px 10px 1px;

&:hover {
    background-color: #ba4a00;
    border-color: #ffbf30;
    transition-duration: 0.75s;
    color: #fdebd0;
}

&:hover h3 {
    color: #2e1f09;
    transition-duration: 0.75s;

}

&:hover a {
    color: #2e1f09;
    transition-duration: 0.75s;

}

`

const Details = styled.p`
padding: 10px 20px 5px 20px;
font-size: 1.25rem;
`
const Links = styled.a`
color: #ffbf30;
padding: 5px;

&:hover {
    color: #2e1f09;

}
`



// #9e710e -- dark
// #ffbf30 -- light
// #2e1f09 -- background