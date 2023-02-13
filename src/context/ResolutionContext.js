import React from 'react'
import { useState, useEffect } from 'react'


const ResolutionContext = React.createContext()

const ResolutionProvider = ({children}) => {
    const [iconSize, setIconSize] = useState()

    useEffect(() => {

      let width = window.screen.availWidth

      let sizes = [20, 30, 40]
      if(width < 600){
        setIconSize(sizes[0])
      } else if(width < 1000) {
        setIconSize(sizes[1])
      } else {
        setIconSize(sizes[2])
      }

    },[])


    return ( 
        <ResolutionContext.Provider value={{iconSize}}>
            {children}
        </ResolutionContext.Provider>
        )
}

export {ResolutionContext, ResolutionProvider}