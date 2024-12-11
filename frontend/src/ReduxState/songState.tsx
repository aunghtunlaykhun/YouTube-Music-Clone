import { createSlice } from "@reduxjs/toolkit";
import type {PayloadAction} from '@reduxjs/toolkit'
import { DataType } from "../helper/function"
;

type currentPlaying = {
    image : string | null,
    audioUrl : string | null,
    artist:string | null,
    songName:string | null
}

type initialProps = {
    globalSongs:Array<DataType>,
    currentPlayingUrl : currentPlaying,
}

const initialState:initialProps = {
    globalSongs:[],
    currentPlayingUrl:{
        image:'',
        audioUrl:'',
        artist:'',
        songName:''
    },
}

const songSlice = createSlice({
    name:'songs',
    initialState:initialState,
    reducers:{
        setSongs : (state,action:PayloadAction<DataType[]>)=>{
            const addData = action.payload as DataType[];
            if(addData){
                state.globalSongs = [
                    ...state.globalSongs,
                    ...addData.filter((newSong)=>!state.globalSongs.some((existsSong)=>existsSong.audio === newSong.audio))
                ]
            }else{
                console.log('add Data is not exists');
            }
        },
        setCurrentPlayingUrl:(state,action:PayloadAction<currentPlaying>)=>{
            state.currentPlayingUrl.audioUrl = action.payload.audioUrl;
            state.currentPlayingUrl.image = action.payload.image;
            state.currentPlayingUrl.artist = action.payload.artist;
            state.currentPlayingUrl.songName = action.payload.songName;
        },
    }
})

export const {setSongs,setCurrentPlayingUrl} = songSlice.actions;
export const songReducer = songSlice.reducer;
