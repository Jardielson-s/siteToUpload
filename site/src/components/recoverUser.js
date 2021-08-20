import React, { useState } from "react";
import '../style/form.css';
import ChangePage from "./changePage";
import Menu from './menu';
import Rodape from './rodape';
import { FcFolder } from 'react-icons/fc';
import api from '../api/axios';



const Recover = () =>{
    
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function loadEmail(e){

       setEmail(e.target.value);
    }
  

    async function change(e){
        e.preventDefault();

       try{

           const response = await api.post('/recoverUser', {email}) 
           setMessage(response.data.message)
           document.getElementById("alert").style.backgroundColor = "green";
           return document.getElementById("alert").style.display = "block";

       }catch(error){
           /* debug err */
          
        
           if(error.response.data.message === "Unable to recover user"){
    
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
                            <input className="input-email-login" type="email" placeholder="your email" value={email} onChange={loadEmail} required/>                            <ChangePage className="button-send-login" name="send" css="button-send-login"/> 
                        </form>
                  </fieldset>
        <Rodape link="http://www.linkedin.com/in/jardielson-silva-ferreira"/>
        </>
    );
}


export default Recover;