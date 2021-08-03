import React from 'react';
import '../style/Config.css';
import Rodape from  './rodape';
import 'rodal/lib/rodal.css';
import Menu from './menu';
import { FcFolder } from 'react-icons/fc';
import PageUser from './pageUser';
import { useHistory } from 'react-router-dom';
const Config = (props) => {

    const history =  useHistory();

    const exit = () =>{  
        return history.push("/login");
     
    }
    const on = () => {
        document.getElementById("div-config").style.display = "block";
    }

    const off = () => {

        document.getElementById("div-config").style.display = "none";
    }

    return (
        <div className="div-content">
        <Menu />
        <FcFolder className="icon-1"/>
        <button className="menu-button-Config" onClick={on}> Config </button>
        <button className="menu-button-Exit" onClick={exit}> Exit </button>
        <div id="div-config">
                <a classname="div-config-a" href="#" onClick={off}> X </a>
                <ul className="div-config-ul">
                    <li><button className="div-config-ul-button"><p>Edit Email</p></button></li>
                    <li><button className="div-config-ul-button"><p>Edit password</p></button></li>
                    <li><button className="div-config-ul-button"><p>Edit avatar</p></button></li>
                    <li><button className="div-config-ul-button"><p>Delete account</p></button></li>
                    <li><button className="div-config-ul-button"><p>Upload File</p></button></li>
                    <li><button className="div-config-ul-button"><p>Trash</p></button></li>
                </ul>
        </div>

        <PageUser />
        <Rodape />
        </div>
    );
}


export default Config;