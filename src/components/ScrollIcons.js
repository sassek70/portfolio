


const ScrollIcon = ({index, detail}) => {



    return (
        <div 
        onMouseOver={()=> mouseHover(index)}>
        <Links href='/' onClick={e => {
            let section = document.getElementById(detail.toString())
            e.preventDefault()
            section && section.scrollIntoView({behavior: "smooth", block: "start"})
        }

        }>{isHovered ? <BsChevronDoubleDown size={30}/> : index}</Links>
        </div>
    )
}

export default ScrollIcon