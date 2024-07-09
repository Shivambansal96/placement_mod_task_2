import React, { useContext } from 'react'
import Child from './Child'
// import { storeContext } from './Context API/StoreContext'
import { storeContext } from './Context API/Trial'
import './App.css'

const App = () => {
  // const {toggle, setToggleHandler} = useContext(storeContext)
  const {parentToggle, parentToggleHandler} = useContext(storeContext)
  return (
    <div id='App'>

      <div id='parent' >
        <div id='new' onClick={parentToggleHandler}>
          {/* <span>Parent</span> */}
          <p>{parentToggle ? 'Child Component Clicked' : 'Parent Component'}</p>
        </div>
            <Child />
      </div>



    </div>
  )
}

export default App
