import { GoPerson } from 'react-icons/go';
import './posts.css';
import { IoAlbumsOutline } from 'react-icons/io5';
import { MdOutlineLibraryMusic } from 'react-icons/md';
import { ChangeEvent, FormEvent, useCallback, useEffect, useState } from 'react';
import { customAxios } from '../../../config/customAxios';
import { FcAddDatabase } from 'react-icons/fc';
import { IoIosAdd } from 'react-icons/io';
import { SlUser } from 'react-icons/sl';
import axios from 'axios';
import  SearchBox  from '../searchbox/searchbox';
import { PostQuery } from '../../../Query/post';
import { useQuery, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';

 const Posts = ()=>{
    const [showForm,setShowForm] = useState(false);
    const [files,setFiles] = useState<File | null>(null);
    const [songName,setSongName] = useState('');
    const [artist,setArtist] = useState('');
    const [type,setType] = useState('');
    const [album,setAlbum] = useState('');
    const [section,updateSection] = useState('');
    const [formatFile,setFormatFile] = useState('');
    const [image,setImage] = useState<File>();
    const [preview,setPrevivew] = useState<any>();
    const [key,setKey] = useState('');

    const url = '/post';

    useEffect(()=>{
        switch(section){
            case 'foryou':
                setKey(import.meta.env.VITE_FORYOU_FETCH_ID);
                break;
            case 'newrelease':
                setKey(import.meta.env.VITE_NEWRELEASES_FETCH_ID);
                break;
            case 'kpop':
                setKey(import.meta.env.VITE_KPOP_FETCH_ID);
                break;
            case 'album':
                setKey(import.meta.env.VITE_ALBUM_FETCH_ID);
                break;
        }
    },[section])

    const {mutate,error,isError,isLoading} = PostQuery(url,key);
   
    const handleName=(e:string)=>{  
        setSongName(e);
    }
    const handleArtist = (e:string)=>{
        setArtist(e);
    }
    const handleAlbum = (e:string)=>{
        setAlbum(e);
    }
    const handleType = (e:string)=>{
        setType(e);
    }
    const handleSection = (e:string)=>{
        updateSection(e);
    }
    const handleImage = (e:any)=>{
        setImage(e[0]);
        const file = e;
       if(file){
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file[0]);
        fileReader.onloadend = ()=>{
            setPrevivew(fileReader.result);
        }
       }
    }
    const handleFiles = (e:any)=>{
        // const reader = new FileReader();
        // reader.onloadend = ()=>{
        // const base64 = reader.result?.toString();
        // setFormatFile(base64 as string);
        // }
        // reader.readAsDataURL(e[0] as File);
        setFiles(e[0]);
    }
    const navigate = useNavigate();
    const gotoHome = ()=>{
        navigate('/home');
    }
   
    const uploadAudioToCloudinary = async (type:string)=>{
        const data = new FormData();
        if(type === 'image' && image){
            data.append('file',image);
        }else if(type === 'audio' && files){
            data.append('file',files);
        }
        data.append('upload_preset','SocialAudio');
        const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
        const responseUrl = await axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`,data,{
            headers:{
                'Content-Type':'multipart/form-data'
            }
        });
        if(responseUrl){
            return responseUrl;
        }
    }
    const postingSong = async(e:FormEvent)=>{
      e.preventDefault();
     try{
        const uploadedImage = await uploadAudioToCloudinary('image');
        const imageUrl = uploadedImage?.data.secure_url;
        const uploadedAudio = await uploadAudioToCloudinary('audio');
        const audioUrl = uploadedAudio?.data.secure_url;

        if(imageUrl && audioUrl){
            const data = new FormData();
            data.append('image',imageUrl);
            data.append('audio',audioUrl);
            data.append('type',type);
            data.append('songName',songName);
            data.append('artist',artist);
            data.append('album',album);
            data.append('section',section);
            mutate(data);
            // const saveToDatabase = await customAxios.post('/post',data,{
            //     headers:{
            //         'Content-Type':'multipart/form-data'
            //     }
            // })
            // console.log(saveToDatabase);
            console.log(isLoading);
        }
     }catch(e){
        console.log(e);
     }
    
    }
    const openCreateFunc = ()=>{
        setShowForm(true);
    }
    return(
        <div className="post_container">
            <div className="post_bg">
            <div className="post_content">
                <div className="logo_bg_div">
                    <img src="/music_logo2.png"/>
                    <h1>Posts</h1>
                </div>
                <div className="post_card">
                    <div className="post_side_card">
                        <button onClick={gotoHome}>
                            <GoPerson/>
                            <p>Add Artist</p>
                        </button>
                        <button>
                            <IoAlbumsOutline/>
                            <p>Add Album</p>
                            </button>
                        <button>
                            <MdOutlineLibraryMusic/>
                            <p>Add Song</p>
                        </button>
                        <div className="post_today">
                            <h1>Today's Posts</h1>
                            <div className="today_posts_items">
                                <div className="item" data-content="1+">
                                    <img src="/song2.png"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="post_form_card">
                        <div className={`${showForm?'active':''} create_post_bg`}>
                            <img src="/create.svg" />
                            <button onClick={openCreateFunc}><IoIosAdd/></button>
                        </div>
                        {
                            showForm && 
                            <form onSubmit={(e)=>postingSong(e)}>
                        <h1>Create Posts / Album / Song</h1>
                            <div>
                                <input onChange={(e)=>handleName(e.target.value)} placeholder="Song Name"/>
                            </div>
                            <div>
                                <input onChange={(e)=>handleArtist(e.target.value)} placeholder="Artist"/>
                            </div>

                            <div className="type_container">
                                <input onChange={(e)=>handleType(e.target.value)} placeholder="type"/>
                                {
                                    type &&
                                    <SearchBox kws={type} content="type" />
                                }
                            </div>

                            <div>
                                <input type="file" onChange={(e)=>{handleFiles(e.target.files)}} placeholder="File" />
                            </div>

                            <div>
                                <input type="file" onChange={(e)=>{handleImage(e.target.files)}} placeholder="Image" />
                             </div>

                            <div>
                                <input type="text" onChange={(e)=>{handleAlbum(e.target.value)}} placeholder="Album" />
                            </div>

                            <div>
                                <input type="text" onChange={(e)=>{handleSection(e.target.value)}} placeholder="Section" />
                            </div>

                            <button type="submit">Create</button>
                            <div>
                                {preview && <img src={preview} className="w-28 h-28" />}
                            </div>
                        </form>
                        } 
                        {/* <form className="test_form">
                            <input placeholder="Email" type="email" className="test_email" name="email" required />
                            <input placeholder="password" type="password" className='test_password' name="password" required minLength={7} />
                            <p>Password must be atleast 6 character.</p>
                            <button className="test_button" type="submit">Submit</button>
                        </form> */}
                    </div> 
                    </div>
        </div>
    )
}

export default Posts;