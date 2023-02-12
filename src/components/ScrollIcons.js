import { useEffect, useState } from 'react'
import {BsChevronDoubleDown, BsChevronDoubleUp} from 'react-icons/bs'
import styled from 'styled-components'


const ScrollIcons = ({iconImage, section}) => {
    const [isHovered, setIsHovered] = useState(false)
    const [iconElement, setIconElement] = useState()
    const [iconElementYLocation, setIconElementYLocation] = useState()

    useEffect(() => {
        setIconElement(document.getElementById(section))
    },[section])

    const onMouseHover = (value) => {
        setIsHovered(isHovered => value)
        setIconElementYLocation(iconElementYLocations => iconElement.getBoundingClientRect().y)
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
                iconElementYLocation > 1 ? 
                    <BsChevronDoubleDown size={30}/> 
                : 
                    iconElementYLocation < (0-1) ? 
                        <BsChevronDoubleUp size={30}/>
                    :
                        iconImage
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

&:hover {
    color: #fdebd0;
}
`