import { useMutation,useQuery,useQueryClient} from "react-query";
import { customAxios } from "../config/customAxios";

const Posting = async (url:string,data:unknown)=>{
    try{
        const result = await customAxios.post(url,data,{
            headers:{
                'Content-Type':'multipart/form-data'
            }
        });
        if(result){
            return result;
        }
    }catch(e){
        console.log(e);
    }
}

export const PostQuery = (url:string,key:string)=>{
    const queryClient = useQueryClient();
    return useMutation((data:unknown)=>Posting(url,data),{
        onSuccess : ()=>{
            queryClient.invalidateQueries({queryKey:key});
        },
    })
}