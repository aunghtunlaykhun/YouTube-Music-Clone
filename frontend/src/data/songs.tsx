import { customAxios } from "../config/customAxios";
import { FetchQuery } from "../Query/fetch";
import { useMemo } from "react";
import { setSongs } from "../ReduxState/songState";
import { useDispatch } from "react-redux";

export const Songs = ()=>{
    const id = 'songs';
    const url = '/listen';
    const {data,error,isLoading,isError} = FetchQuery({id,url});
    // const dispatch = useDispatch();
    // dispatch(setSongs({payload:data}));
    return {data,error,isLoading,isError};
}