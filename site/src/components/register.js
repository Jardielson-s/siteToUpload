import React, { useState } from "react";
import '../style/form.css';
import ChangePage from "./changePage";
import Menu from './menu';
import Rodape from './rodape';
import { FcFolder } from 'react-icons/fc';
import { useHistory } from "react-router-dom";
import api from '../api/axios';


const Register = () =>{
    
    const [name, setName]  = useState("");
    const [avatar, setAvatar]  = useState();
    const [email, setEmail]  = useState("");
    const [password, setPassword]  = useState("");
    const [message, setMessage] = useState("");
   
   
   const history = useHistory();

    async function change(e){

             e.preventDefault();
             const formData = new FormData();

             formData.append("avatar", avatar);
             formData.append("name", name);
             formData.append("email", email);
             formData.append("password", password);

             const response = await api.post('/create', formData);

             if(response.data.token){
                 setMessage(response.data.message)
                 localStorage.setItem("token", response.data.token)

                 setTimeout(()=>{
                    
                    document.getElementById("alert").style.backgroundColor = "green";
                    document.getElementById("alert").style.display = "block";
                    return history.push("/pageUser");
                 },800)
             }
 

             
             if(response.data.message === "email already exist"){
                setMessage(response.data.message)
                document.getElementById("alert").style.backgroundColor = "red";
                return document.getElementById("alert").style.display = "block";
             }
             
             //history.push("/pageUser");
    }

    return(
        <>
        <Menu />
             <FcFolder className="icon-1"/>
             <ChangePage className="menu-button" name="singIn" css="menu-button-singIn" />
             <ChangePage className="menu-button" name="singUp" css="menu-button-singUp" />
             <div id="alert"><p>{message}</p></div>
                  <fieldset className="div-form">
                       <form onSubmit={change} encType="multipart/form-data">
                           <input className="input-name" type="text" placeholder="your name" value={name} onChange={e => setName(e.target.value)} required/>                          
                           <label className="input-avatar" htmlFor="select-file" placeholder="upload"> upload: { avatar != null ? avatar.name : null} </label>
                           <input id="select-file" className="input-avatar" type="file" placeholder="your avatar" onChange={e => setAvatar(e.target.files[0])} />
                           <input className="input-email" type="email" placeholder="your email" value={email} onChange={e => setEmail(e.target.value)} required/>
                           <input className="input-password" type="password" placeholder="your password" value={password} onChange={e => setPassword(e.target.value)} required/>
                           <ChangePage className="button-send" name="send" css="button-send"/>
                       </form>
                  </fieldset>
        <Rodape link="http://www.linkedin.com/in/jardielson-silva-ferreira"/>
        </>
    );
}


export default Register;