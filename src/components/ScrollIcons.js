import { useEffect, useState, useContext } from 'react'
import {BsChevronDoubleDown, BsChevronDoubleUp} from 'react-icons/bs'
import styled from 'styled-components'
import { ResolutionContext } from '../context/ResolutionContext'



const ScrollIcons = ({iconImage, section, }) => {
    const [isHovered, setIsHovered] = useState(false)
    const [iconElement, setIconElement] = useState()
    const [iconElementYLocation, setIconElementYLocation] = useState()
    const {iconSize} = useContext(ResolutionContext)

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
                    <BsChevronDoubleDown size={iconSize}/> 
                : 
                    iconElementYLocation < (0-1) ? 
                        <BsChevronDoubleUp size={iconSize}/>
                    :
                        iconImage(iconSize) 
                :
                iconImage(iconSize)
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