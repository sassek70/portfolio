import { useEffect, useState } from 'react'
import styled from 'styled-components'
import ArticleCard from './ArticleCard'

const Blogs = () => {

    const [articles, setArticles] = useState([])

    useEffect(() => {
    fetch(`https://dev.to/api/articles?username=${process.env.REACT_APP_DEV_TO_ARTICLES}`)
    .then(res => res.json())
    .then(articleList => setArticles(articleList))
    },[])

    console.log(articles)

    const displayArticles = articles.map((article) => {
        const {title, url, id, description, tags, reading_time_minutes} = article
        return(
            <ArticleCard key={id} title={title} url={url} description={description} tags={tags} reading_time_minutes={reading_time_minutes}/>)
    })

    return(
        <BlogsContainer id="blogs">
            <h2>
                Blogs:
            </h2>
            <CardContainer>
                {displayArticles}
            </CardContainer>
        </BlogsContainer>
    )
}

export default Blogs

const BlogsContainer = styled.section`
border: 2px solid green;
height: fit-content;
/* width: 100vw; */
padding-bottom: 30px;
color: #ffbf30;
`

const CardContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
`