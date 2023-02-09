import styled from 'styled-components'
import { icons } from '../data/ScrollIconsData'
import ScrollIcons from './ScrollIcons'


const ScrollToSection = () => {

    const displayIcons = icons.map((icon) => <ScrollIcons iconImage={icon.iconImage} section={icon.section}/>)

    return (
        <ScrollButtons>
            {displayIcons}
        </ScrollButtons>
    )
}

export default ScrollToSection

const ScrollButtons = styled.nav`
position: fixed;
height: 50px;
top: 10px;
display: flex;
flex-direction: column;
align-self: flex-start;
min-height: 20vh;
left: 3vw;
row-gap: 10px;
`



