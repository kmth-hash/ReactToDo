import React, {createContext , useState , useEffect} from 'react';

const DarkModeContext = createContext();

function DarkModeProvider(props) {
    const [darkMode , setDarkMode] = useState(false);
    const toggleDarkMode = ()=>{
        console.log(darkMode);
        setDarkMode(!darkMode);
    };
    return (
        <div>
            <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
                {props.children}
            </DarkModeContext.Provider>
        </div>
    );
};

export {DarkModeContext, DarkModeProvider} ;

