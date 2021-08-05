import React, { useState } from "react";
import '../style/form.css';
import ChangePage from "./changePage";
import Menu from './menu';
import Rodape from './rodape';
import { FcFolder } from 'react-icons/fc';
import { useHistory } from "react-router-dom";


const Register = () =>{

    const [name, setName]  = useState("");
    const [avatar, setAvatar]  = useState("");
    const [email, setEmail]  = useState("");
    const [password, setPassword]  = useState("");

    const history = useHistory();

    function change(e){

             e.preventDefault();

             if(email === "jardielsonbio@gmail.com"){
                return document.getElementById("alert").style.display = "block";
             }

             history.push("/pageUser");
    }

    return(
        <>
        <Menu />
             <FcFolder className="icon-1"/>
             <ChangePage className="menu-button" name="singIn" css="menu-button-singIn" />
             <ChangePage className="menu-button" name="singUp" css="menu-button-singUp" />
             <div id="alert"><p>alert</p></div>
                  <fieldset className="div-form">
                       <form onSubmit={change}>
                           <input className="input-name" type="text" placeholder="your name" value={name} onChange={e => setName(e.target.value)} required/>
                           <label className="input-avatar" for="select-file" placeholder="upload"> upload: {avatar} </label>
                           <input id="select-file" className="input-avatar" type="file" placeholder="your avatar" value={avatar} onChange={e => setAvatar(e.target.value)} />
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