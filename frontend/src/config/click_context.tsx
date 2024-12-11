import { createContext,useReducer,useContext} from "react";

type initialProps = {
    isCollapse:boolean
}

type actionType = {type:'toggle_Menu'} 

const initialState:initialProps = {
    isCollapse :false
}

type contextProps = {
    clickState:initialProps,
    dispatch:React.Dispatch<actionType>
}

const ClickContext = createContext<contextProps | null>(null);



export const useClickContext = ()=>{
    const context = useContext(ClickContext);
    if(!context){
        throw new Error('Context must be Provided')
    }
    return context;
}

type ProviderProps = {
    children:React.ReactNode;
}

export const ClickContextProvider = ({children}:ProviderProps)=>{

    const clickReducer = (state:initialProps,action:actionType)=>{
        switch(action.type){
            case "toggle_Menu":
                return {...state,isCollapse:!state.isCollapse}

            default:
            return state;
        }
        
    }

    const [clickState,dispatch] = useReducer(clickReducer,initialState);
    return(
      <ClickContext.Provider value={{clickState,dispatch}}>
        {children}
      </ClickContext.Provider>  
    )
}