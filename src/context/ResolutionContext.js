import React from 'react'
import { useState, useEffect } from 'react'


const ResolutionContext = React.createContext()

const ResolutionProvider = ({children}) => {
    const [iconSize, setIconSize] = useState()
    const [width, setWidth] = useState()

    useEffect(() => {

      let screenResWidth = window.screen.availWidth
      setWidth(window.screen.availWidth)

      if(screenResWidth < 1000){
        setIconSize(30)
      } else {
        setIconSize(40)
      }

    },[])


    return ( 
        <ResolutionContext.Provider value={{iconSize, width}}>
            {children}
        </ResolutionContext.Provider>
        )
}

export {ResolutionContext, ResolutionProvider}