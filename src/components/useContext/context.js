import { createContext, useContext } from "react";

export const DashboardContext = createContext(undefined);


export function useUserContext(){
    const user = useContext(DashboardContext);

    if(user===undefined){
        throw new Error("The useUserContext need to have some data in it");
    }
}