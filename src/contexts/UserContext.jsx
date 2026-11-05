import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext()

const UserProvider = ({children}) =>{

  let [token, setToken] = useState(true)


    return(

      <UserContext.Provider value={{token, setToken}}>
      {children}
      </UserContext.Provider>
    )

}

export default UserProvider