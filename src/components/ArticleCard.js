import styled from "styled-components"
import {FaDev} from 'react-icons/fa'

const ArticleCard = ({title, url, id, description, tags, reading_time_minutes}) => {
    return (
        <Card>
            <h3>{title}</h3>
            <Details>{description}</Details>
            <Details>tags: {tags} {reading_time_minutes} min</Details>
            <Links href={url} target='_blank' rel='noreferrer'><FaDev size={40}/></Links>
        </Card>
    )
}

export default ArticleCard

const Card = styled.div`
max-width: 500px;
border: 2px solid #ffbf30;
margin: 10px 15px 10px 15px;
padding: 5px;
display: flex;
flex-direction: column;
border-radius: 20px;
align-items: center;
box-shadow: 0px 0px 10px 1px;

`


const Details = styled.p`
padding: 10px 20px 5px 20px;
font-size: 1.25rem;
`
const Links = styled.a`
color: #ffbf30;
padding: 5px;

&:hover {
    color: #9e710e;
}
`