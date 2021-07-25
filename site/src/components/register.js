import React from "react";
import '../style/form.css';
import ChangePage from "./changePage";
import Menu from './menu';
import Rodape from './rodape';
import { FcFolder } from 'react-icons/fc';

const Register = () =>{
    return(
        <>
        <Menu />
             <FcFolder className="icon-1"/>
             <ChangePage className="menu-button" name="singIn" css="menu-button-singIn" />
             <ChangePage className="menu-button" name="singUp" css="menu-button-singUp" />
                  <fieldset className="div-form">
                       <form>
                           <input className="input-name" type="text" placeholder="your name" required/>
                           <input className="input-avatar" type="text" placeholder="your avatar" required/>
                           <input className="input-email" type="email" placeholder="your email" required/>
                           <input className="input-password" type="password" placeholder="your password" required/>
                           <ChangePage className="button-send" name="send" css="button-send"/>
                       </form>
                  </fieldset>
        <Rodape link="http://www.linkedin.com/in/jardielson-silva-ferreira"/>
        </>
    );
}


export default Register;