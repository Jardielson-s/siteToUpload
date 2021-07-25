import React from "react";
import '../style/Main.css';
import Menu from './menu';
import Rodape from './rodape';
import peopleFile from '../images/people-file.jpg';
import { FcFolder } from 'react-icons/fc';
import ChangePage from './changePage';
//import Login from './login';

const Main = () =>{ 
    return(
        <div className="Content">
            <Menu />
             <FcFolder className="icon-1"/>
             <ChangePage className="menu-button" name="singIn" css="menu-button-singIn" />
             <ChangePage className="menu-button" name="singUp" css="menu-button-singUp" />
             <img className="image-1" src={peopleFile} alt="img1"/>
             <p className="paragh">
             your device is memory full, but you don't want to get rid of the files, use our cloud file management service.
             We've set up the entire s3 service so you can simply upload quickly and securely.
             </p>
            <Rodape link="http://www.linkedin.com/in/jardielson-silva-ferreira"/>
        </div>
    );
}


export default Main;