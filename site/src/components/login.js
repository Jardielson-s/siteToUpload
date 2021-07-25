import React from "react";
import '../style/form.css';
import ChangePage from "./changePage";
import Menu from './menu';
import Rodape from './rodape';
import { FcFolder } from 'react-icons/fc';


const Login = () =>{
    return(
        <>
        <Menu />
             <FcFolder className="icon-1"/>
             <ChangePage className="menu-button" name="singIn" css="menu-button-singIn" />
             <ChangePage className="menu-button" name="singUp" css="menu-button-singUp" />
                   <fieldset className="div-form-login">
                        <form>
                            <input className="input-email-login" type="email" placeholder="your email" required/>
                            <input className="input-password-login" type="password" placeholder="your password" required/>
                            <ChangePage className="button-send-login" name="send" css="button-send-login"/>
                        </form>
                  </fieldset>
        <Rodape link="http://www.linkedin.com/in/jardielson-silva-ferreira"/>
        </>
    );
}


export default Login;