// import { createContext, useState } from "react";

// export const storeContext = createContext(null);

// const StoreContextProvider = (props) => {

// // logic implement
// const [toggleParent, setToggleParent] = useState(false)
// const [toggle, setToggle] = useState(false)

// const setToggleHandler = () => {
//     setToggleParent(!toggleParent)

//     console.log(`clicked`, toggle)
// }

// const setToggleParentHandler = () => {
//     setToggle(!toggle)

//     console.log(`clicked`, toggle)
// }

//  const contextValues = {
//     // data, functions 

//     toggle, setToggle, 
//     setToggleHandler,
//     toggleParent, setToggleParent, setToggleParentHandler

//  }

//     return (


//  <storeContext.Provider value={contextValues}>

//     {props.children}

//  </storeContext.Provider>
//     )



// }

// export default StoreContextProvider;