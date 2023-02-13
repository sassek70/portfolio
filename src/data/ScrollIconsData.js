import {BsInfoSquare} from 'react-icons/bs'
import {RiArticleLine, RiCodeSSlashFill} from 'react-icons/ri'
import {IoChatboxEllipsesSharp} from 'react-icons/io5'

export const icons = [
        {
            id: 1,
            iconImage: (size) => <BsInfoSquare size={size}/>,
            section: "about-me"
        },
        {
            id: 2,
            iconImage: (size) => <RiCodeSSlashFill size={size}/>,
            section: "projects"
        },
        {
            id: 3,
            iconImage: (size) => <RiArticleLine size={size}/>,
            section: "blogs"
        },
        {
            id: 4,
            iconImage: (size) => <IoChatboxEllipsesSharp size={size}/>,
            section: "contact"
        },
    ]
  


