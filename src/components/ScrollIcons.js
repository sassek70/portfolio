import { useEffect, useState } from 'react'
import {BsChevronDoubleDown, BsChevronDoubleUp} from 'react-icons/bs'
import styled from 'styled-components'


const ScrollIcons = ({iconImage, section}) => {
    // let iconElement = document.getElementById(section)
    // let iconElementYLocation = iconElement.getBoundingClientRect().y
    const [isHovered, setIsHovered] = useState(false)
    const [iconElement, setIconElement] = useState()
    const [iconElementYLocation, setIconElementYLocation] = useState()

    useEffect(() => {
        setIconElement(document.getElementById(section))

    })
    const onMouseHover = (value) => {
        setIsHovered(isHovered => value)
        setIconElementYLocation(iconElement.getBoundingClientRect().y)
        if(iconElementYLocation < 0 && isHovered) {
            return <BsChevronDoubleDown size={30}/>
        } else if(iconElementYLocation > 0 && isHovered) {
            return <BsChevronDoubleUp size={30}/>
        } else {
            return iconImage
        }
    }

    const handleClick = (e) => {
        e.preventDefault()
        iconElement && iconElement.scrollIntoView({behavior: "smooth", block: "start"})
    }

    return (
        <div 
        onMouseEnter={() => onMouseHover(true)}
        onMouseLeave={() => onMouseHover(false)}>
        <LinksIcon as='a' href='/' onClick={(e) =>handleClick(e)}>
            {isHovered ?
                iconElementYLocation < 0 ? <BsChevronDoubleUp size={30}/>: <BsChevronDoubleDown size={30}/>
                :
                iconImage
            }   
        </LinksIcon>
        </div>
    )
}

export default ScrollIcons

const LinksIcon = styled.div`
color: #ffbf30;
/* padding: 5px; */
/* margin-top: 10px; */

&:hover {
    color: #9e710e;
}
`

// const A = styled.a`
// text-decoration-color: none;
// `