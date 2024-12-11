import React, { createContext, useReducer,useContext } from "react"



type Props = {
    children:React.ReactNode;
}

type initialProps = {
    token:string,
    artist:Array<unknown>
}

const initialValue = {
    token:'',
    artist:[]
}

type ActionType = {type:'set_token',payload:string} | {type:'set_artist',payload:Array<unknown>}
 
type contextProps = {
    spotifyState : initialProps,
    dispatch : React.Dispatch<ActionType>
}

const SpotifyMusicContext = createContext<contextProps | null>(null);
export const useSpotifyConext = ()=>{
    const context = useContext(SpotifyMusicContext);
    if(!context){
        throw new Error('Context Must be Provided');
    }else{
        return context;
    }
}
export const SpotifyMusic = ({children}:Props)=>{

    const SReducer = (state:initialProps,action:ActionType)=>{
        switch(action.type){
            case 'set_token':
                return {...state,token:action.payload};
            case 'set_artist':
                return {...state,artist:action.payload};
        }
    }

const [spotifyState,dispatch] = useReducer(SReducer,initialValue);

    return(
        <SpotifyMusicContext.Provider value={{spotifyState,dispatch}}>
            {children}
        </SpotifyMusicContext.Provider>
    )
}