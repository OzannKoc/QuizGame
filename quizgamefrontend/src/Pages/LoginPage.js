import React, { useState,useEffect } from 'react';
import Input from "../Components/Input"; 
import {useDispatch,useSelector} from "react-redux";
import { loginHandler} from '../Redux/authAction';


const LoginPage = (props) => {
    const [username,setUsername] = useState();
    const [password,setPassword] = useState();
    const [error,setError] = useState();
    const dispatch = useDispatch();
    const store = useSelector(store =>{ return store});
    useEffect(()=>{
        setError(undefined);
    },[username,password]);
    
    const onLogin=async(e)=>{
        e.preventDefault();
        const creds ={
            username,
            password
        };
        const {history} = props;
        const {push} = history;
        setError(undefined);
        try {
           await dispatch(loginHandler(creds));
           
           push("/");
           
        }catch(error){
            setError(error.response.data.message);      
        }

        
    }
    
    const emptyFieldCase = username&&password;
    return (
        <div className="container">
            <form>
            <h1 className="text-center" >{"Login"}</h1>
            
            <Input name="username" label ={"Username"} type ="text" onChange = {(e)=>setUsername(e.target.value)} />
            <Input name="password" label ={"Password"} type ="password" onChange = {(e)=>setPassword(e.target.value)}/>
            <div className="text-center">
            {error &&
            <div className="alert alert-danger" >
            {error}
            </div>
            }
            <button onClick={onLogin} 
            className="btn btn-primary"
            disabled={!emptyFieldCase}>{"Login"}</button>    
            </div>
            </form>
        </div>
    )
    
}


export default  LoginPage;