import React from "react";
import img from '../images/people-file.jpg';
import '../style/User.css';
import peopleFile from '../images/people-file.jpg';
import Menu from './menu';
import Rodape from './rodape';
import ChangePage from "./changePage";
import { FcFolder } from "react-icons/fc";


const PageUser = () =>{
    return(
        <>
        <Menu />
         <FcFolder className="icon-1"/>
            <img className="image-1" src={peopleFile} alt="img1"/>
            <ChangePage className="menu-button" name="Config" css="menu-button-singIn" />
             <ChangePage className="menu-button" name="Exit" css="menu-button-singUp" />
                  <div className="div-file">
                      <ul>
                          <li> <img className="images" src={img} alt=""/> </li>
                          <li> <img className="images" src={img} alt=""/> </li>
                          <li> <img className="images" src={img} alt=""/> </li>
                          <li> <img className="images" src={img} alt=""/> </li>
                          <li> <img className="images" src={img} alt=""/> </li>
                          <li> <img className="images" src={img} alt=""/> </li>
                          <li> <img className="images" src={img} alt=""/> </li>
                          <li> <img className="images" src={img} alt=""/> </li>
                      </ul>
                  </div>
        <Rodape link="http://www.linkedin.com/in/jardielson-silva-ferreira"/>
        </>
    );
}


export default PageUser;