import React, { createContext, useContext, useReducer } from "react"

type initialProps = {
    audioRef:React.RefObject<HTMLAudioElement> | null
    progress:number
    currentTime:number 
    duration:number
    isOnplay:boolean
}

type ActionType = | {type:'toggle_play_pause'} | {type:'insert_audioRef',payload:React.RefObject<HTMLAudioElement>} | 
{type:'update_progress',payload:number} | 
{type:'update_currentTime',payload:number} | 
{type:'update_duration',payload:number} | 
{type:'set_play_pause',payload:boolean}

type contextProps = {
    resultState:initialProps
    dispatch:React.Dispatch<ActionType>
}

type MusicContextProps = {
    children:React.ReactNode
}

const Mcontext = createContext<contextProps | null>(null);

export const useMusicContext = ()=>{
    const musicContext = useContext(Mcontext);
    if(!musicContext){
        throw new Error('Context must be provided');
    }else{
        return musicContext;
    }
   }

export const MusicContext = ({children}:MusicContextProps)=>{
    const initialState:initialProps = {
        isOnplay:false,
        audioRef:null,
        progress:0,
        currentTime:0,
        duration:0
    }    

    const MReducer = (state:initialProps,action:ActionType)=>{
        switch(action.type){
            case 'toggle_play_pause':
                return {...state,isOnplay:!state.isOnplay}

            case 'set_play_pause':
                return {...state,isOnplay:action.payload}
                
            case 'insert_audioRef':
                return {...state,audioRef:action.payload}
            
            case 'update_progress':
                return {...state,progress:action.payload}
              
            case 'update_currentTime':
                return {...state,currentTime:action.payload}
                
            case 'update_duration':
                return {...state,duration:action.payload}
                
            default:
                return state;
        }
    }

    const [resultState,dispatch] = useReducer(MReducer,initialState)

    return(
        <Mcontext.Provider value={{resultState,dispatch}} >
            {children}
        </Mcontext.Provider>
    )
}