import React, { useContext } from 'react'
// import { storeContext } from './Context API/StoreContext'
import { storeContext } from './Context API/Trial'


const Child = () => {
    // const {toggleParent, setToggleParentHandler} = useContext(storeContext)
    const {childToggle, childToggleHandler} = useContext(storeContext)

  return (
    <div id='Child' onClick={childToggleHandler}>

        <p >{childToggle ? 'Parent Component Clicked' : 'Child Component'}</p>
      
    </div>
  )
}

export default Child
