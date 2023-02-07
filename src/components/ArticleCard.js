import styled from "styled-components"
import {FaDev} from 'react-icons/fa'

const ArticleCard = ({title, url, id, description, tags, reading_time_minutes}) => {
    return (
        <Card>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>tags: {tags} {reading_time_minutes} min</p>
            <a href={url}><FaDev size={30} style={{fill: 'black'}}/></a>
        </Card>
    )
}

export default ArticleCard

// const Card = styled.div`
// max-width: 450px;
// max-height: 250px;
// border: 2px solid black;
// margin: 5px;
// padding: 5px;
// `

const Card = styled.div`
max-width: 500px;
border: 2px solid black;
margin: 10px 15px 10px 15px;
padding: 5px;
display: flex;
flex-direction: column;
border-radius: 20px;
align-items: center;
`