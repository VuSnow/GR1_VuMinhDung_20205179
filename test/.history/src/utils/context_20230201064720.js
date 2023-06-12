import Context from "@mui/base/TabsUnstyled/TabsContext";
import { createContext, useState } from "react";

export const context = createContext();

const AppContext = ({children}) => {
    return(
        <Context.Provider>{children}</Context.Provider>
    )
}

export default AppContext;