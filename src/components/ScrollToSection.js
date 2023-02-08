import styled from 'styled-components'
import {BsInfoSquare, BsChevronDoubleDown} from 'react-icons/bs'
import {RiArticleLine, RiCodeSSlashFill} from 'react-icons/ri'
import {IoChatboxEllipsesSharp} from 'react-icons/io5'
import { useState } from 'react'


const ScrollToSection = () => {

    const [isHovered, setIsHovered] = useState(false)

    const icons = [<BsInfoSquare size={30} />, <RiCodeSSlashFill size={30}/>, <RiArticleLine size={30}/>, <IoChatboxEllipsesSharp size={30}/>]

    const mouseHover = () => {
        console.log("hello")
    }



    return (
        <ScrollButtons>
            <div 
            onMouseOver={()=> mouseHover(true)}
            onMouseLeave={()=> mouseHover(false)}>
            <Links href='/' onClick={e => {
                let info = document.getElementById('about-me')
                e.preventDefault()
                info && info.scrollIntoView({behavior: "smooth", block: "start"})
            }

            }>{isHovered ? <BsChevronDoubleDown size={30}/> : <BsInfoSquare size={30} />}</Links>
            </div>
            <div 
            onMouseOver={()=> mouseHover(true)}
            onMouseLeave={()=> mouseHover(false)}>
                <Links href='/' onClick={e => {
                    let projects = document.getElementById('projects')
                    e.preventDefault()
                    projects && projects.scrollIntoView({behavior: "smooth", block: "start"})
                }
                }>{isHovered ? <BsChevronDoubleDown size={30}/> : <RiCodeSSlashFill size={30}/>}</Links>
            <div 
            onMouseOver={()=> mouseHover(true)}
            onMouseLeave={()=> mouseHover(false)}></div>
            <Links href='/' onClick={e => {
                let blogs = document.getElementById('blogs')
                e.preventDefault()
                blogs && blogs.scrollIntoView({behavior: "smooth", block: "start"})
            }
            }>{isHovered ? <BsChevronDoubleDown size={30}/> : <RiArticleLine size={30}/>}</Links>
            </div>
            <div 
            onMouseOver={()=> mouseHover(true)}
            onMouseLeave={()=> mouseHover(false)}>
            <Links href='/' onClick={e => {
                let contact = document.getElementById('contact')
                e.preventDefault()
                contact && contact.scrollIntoView({behavior: "smooth", block: "start"})
            }
            }>{isHovered ? <BsChevronDoubleDown size={30}/> : <IoChatboxEllipsesSharp size={30}/>}</Links>
            </div>
        </ScrollButtons>
    )
}


export default ScrollToSection

const ScrollButtons = styled.nav`
position: fixed;
height: 50px;
/* background-color: #ffbf30; */
top: 10px;
display: flex;
flex-direction: column;
align-self: flex-start;
min-height: 20vh;
left: 3vw;
`

const Links = styled.a`
color: #ffbf30;
padding: 5px;

&:hover {
    color: #9e710e;
}

`

