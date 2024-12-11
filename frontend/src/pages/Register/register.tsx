import { FormEvent, useEffect, useState } from 'react';
import './register.css';
import { useNavigate } from 'react-router-dom';
import { customAxios } from '../../config/customAxios';
import * as yup from 'yup';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import axios from 'axios';
type authorizeProps  = {
    name?:string,
    email:string,
    password:string,
}

export const Register = ()=>{
    const [isloginOption,setIsLoginOption] = useState(true);
    const accountId = import.meta.env.VITE_B2_ACCOUNT_ID;
    const applicationKey = import.meta.env.VITE_B2_APPLICATION_KEY;
    const navigate = useNavigate();
    const changeToSignIn = ()=>{
        setIsLoginOption(true);
    }

    const changeToSignUp = ()=>{
        setIsLoginOption(false);
    }
    const gotoHome = ()=>{
        navigate('/home');
    }

    const validationSchema = yup.object().shape({
        name:yup.string().required(),
        email:yup.string().email('Invalid Email Format').required().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%&*-_=+])[a-zA-Z0-9!@#$%^&*-_=+]{7,100}@[a-zA-Z0-9]*(gmail|email)\.com$/),
        password:yup.string().required(),
    })

    const {register,watch,handleSubmit,formState:{errors}} = useForm({
        resolver:yupResolver(validationSchema),
    });

    const Submitting = async(data:authorizeProps)=>{
        console.log(data);
        const response = await customAxios.post('/register',data);
        console.log(response);
    }

        
        // const redirectUri = 'http://localhost:5173';
        // const responseType = 'code';
        // const Auth_EndPoint = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}`;
    
    return (
        <div className="register_container">
            <div className="register_background">
            </div>
            <div className="register_card">
                <form className="register_form" onSubmit={handleSubmit(Submitting)}>
                    <div className="register_header">
                        <img src="/music_logo2.png"/>
                        <h1 className="register_logo_name">Music</h1>
                    </div>
                    <div className="register_option">
                        <h1 className={`sign_in ${isloginOption?'active':''}`} onClick={changeToSignIn}>Sign In</h1>
                        <h1 className={`sign_up ${!isloginOption?'active':''}`} onClick={changeToSignUp}>Sign up</h1>
                    </div>
                    {  
                        isloginOption ?
                        <div className="register_input_field">
                        <div className="login_email">
                            <input placeholder="Email" {...register('email')} />
                            <p>{errors.email?.message}</p>
                        </div>
                        <div className="login_password">
                            <input placeholder="Password" {...register('password')} />
                            <p>{errors.password?.message}</p>
                        </div>

                        <div className="login_checkbox">
                            <input type="checkbox"/>
                        </div>
                        <button className="register_submit" onClick={gotoHome}  type="submit">Sign In</button>

                        <div className="forgot_pass">Forgot Password?</div> 
                    </div>
                     : 
                        <div className="register_input_field">
                            <div className="register_username">
                                <input placeholder="Username" {...register('name')} />
                                <p>{errors.name?.message}</p>
                            </div>
                            <div className="register_email">
                                <input placeholder="Email" {...register('email')} />
                                <p>{errors.email?.message}</p>
                            </div>
                            <div className="register_password">
                                <input placeholder="password" {...register('password')} />
                                <p>{errors.password?.message}</p>
                            </div>
                            <button className="register_submit" type="submit" >Sign Up</button>

                            <div className="already">Already have an account? ,<span onClick={changeToSignIn} >sign in </span></div>
                        </div>
                    }

                </form>
            </div>
        </div>
    )
}