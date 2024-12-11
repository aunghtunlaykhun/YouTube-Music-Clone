import { useQueryClient ,useQuery} from "react-query";
import { customAxios } from "../config/customAxios";

const fetchFunction = async(url:string,params:string)=>{
    const result = await customAxios.get(url,{
        params:{
            keyword:params
        }
    });
    console.log('re-render in Fetching')
    return result;
}


export const useFetchQuery = (key:string,url:string,kw:string)=>{
    // const queryClient = useQueryClient();
    const {data,error,isLoading,isError,refetch} = useQuery(key,()=>fetchFunction(url,kw as string),{
        onSuccess:()=>{

        },
        onError:()=>{

        },
        refetchOnMount:false,
        cacheTime:6000,
        refetchOnWindowFocus:false,
    })
    // queryClient.invalidateQueries(id);
    return {data,error,isLoading,isError,refetch}
}