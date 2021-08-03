import React, { useState } from "react";
import '../style/form.css';
import ChangePage from "./changePage";
import Menu from './menu';
import Rodape from './rodape';
import { FcFolder } from 'react-icons/fc';
import { useHistory } from "react-router-dom";

const Login = () =>{
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    function loadEmail(e){
       //e.prevenetDefault();

       setEmail(e.target.value);
    }
    function loadPassword(e){
        //e.prevenetDefault();
 
        setPassword(e.target.value);
     }
    function change(e){
        e.preventDefault();
        if(email === "jardielsonbio@gmail.com"){
            return document.getElementById("alert").style.display = "block";
        }
             history.push("/pageUser");
    }
    function alert(param){
        if(email === "jardielsonbio@gmail.com"){
            document.getElementById("alert").style.display = "block";
        }
    }
    return(
        <>
        <Menu />
             <FcFolder className="icon-1"/>
             <ChangePage className="menu-button" name="singIn" css="menu-button-singIn" />
             <ChangePage className="menu-button" name="singUp" css="menu-button-singUp" />
             <div id="alert"><p>alert</p></div>
                   <fieldset className="div-form-login">
                        <form onSubmit={change}>
                            <input className="input-email-login" type="email" placeholder="your email" value={email} onChange={loadEmail} required/>
                            <input className="input-password-login" type="password" placeholder="your password" value={password} onChange={loadPassword} required/>
                            <ChangePage className="button-send-login" name="send" css="button-send-login"/>
                        </form>
                  </fieldset>
        <Rodape link="http://www.linkedin.com/in/jardielson-silva-ferreira"/>
        </>
    );
}


export default Login;