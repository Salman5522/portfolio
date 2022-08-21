import React, {useState, useContext} from 'react';

const AppContext = React.createContext();

export function useAppContext(){
    return useContext(AppContext);
}

export function ContextProvider({children}){

   const [navItemsSetting, setNavItemsSetting] = useState({
     width: 0,
     display: "none",
     opacity: 1
   });

    return (
      <AppContext.Provider
        value={{
          navItemsSetting, setNavItemsSetting
        }}
      >
        {children}
      </AppContext.Provider>
    );
}