import styled from 'styled-components'
import { icons } from '../data/ScrollIconsData'
import ScrollIcons from './ScrollIcons'


const ScrollToSection = () => {

    const displayIcons = icons.map((icon) => <ScrollIcons key={icon.id} iconImage={icon.iconImage} section={icon.section}/> )

    return (
        <ScrollButtons>
            {displayIcons}
        </ScrollButtons>
    )
}

export default ScrollToSection

const ScrollButtons = styled.nav`
position: sticky;
height: 50px;
top: 0;
display: flex;
flex-direction: column;
align-self: flex-start;
min-height: 20vh;
padding: 30px 40px;
row-gap: 10px;
`



