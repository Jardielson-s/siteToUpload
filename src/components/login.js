import React, { useState } from "react";
import '../style/form.css';
import ChangePage from "./changePage";
import Menu from './menu';
import Rodape from './rodape';
import { FcFolder } from 'react-icons/fc';
import { useHistory } from "react-router-dom";
import api from '../api/axios';



const Login = () =>{
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const history = useHistory();

    function loadEmail(e){

       setEmail(e.target.value);
    }
    function loadPassword(e){
 
        setPassword(e.target.value);
     }
    async function change(e){
        e.preventDefault();

       try{
             const response = await api.post('/login', {email, password})
            
             if(response.data.token){
                 localStorage.setItem("token", response.data.token)
                 history.push("/pageUser");
             }
         
       }catch(error){
           /* debug err */
          
        
           if(error.response.data.message === "email is invalid" || error.response.data.message === "password is invalid"){
    
             setMessage(error.response.data.message)

             return document.getElementById("alert").style.display = "block";
          }
       }

             
 

             
    
    }
    
    return(
        <>
        <Menu />
             <FcFolder className="icon-1"/>
             <ChangePage className="menu-button" name="singIn" css="menu-button-singIn" />
             <ChangePage className="menu-button" name="singUp" css="menu-button-singUp" />
             <div id="alert"><p>{message}</p></div>
                   <fieldset className="div-form-login">
                        <form onSubmit={change}>
                            <input className="input-email-login" type="email" placeholder="your email" value={email} onChange={loadEmail} required/>
                            <input className="input-password-login" type="password" placeholder="your password" value={password} onChange={loadPassword} required/>
                            <ChangePage className="button-send-login" name="send" css="button-send-login"/> <a className="recover" href="/recoverUser">recover account</a>
                        </form>
                  </fieldset>
        <Rodape link="http://www.linkedin.com/in/jardielson-silva-ferreira"/>
        </>
    );
}


export default Login;