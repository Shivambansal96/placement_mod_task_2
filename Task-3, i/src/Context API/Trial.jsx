import { createContext, useState } from "react"

export const storeContext = createContext(null);

const TrialProvider = (props) => {

    //logic

    const [childToggle, setChildToggle] = useState(false)
    const [parentToggle, setParentToggle] = useState(false)

    const childToggleHandler = () => {

        setParentToggle(!parentToggle);

    }

    const parentToggleHandler = () => {

        setChildToggle(!childToggle);

    }


    const contextValues = {
        // variables , data , functions

        parentToggle, setParentToggle, parentToggleHandler, 
        childToggle, setChildToggle, childToggleHandler

    }

    return(

        
        <storeContext.Provider value={contextValues}>
                {props.children}
        </storeContext.Provider>
    )

}


export default TrialProvider;