import React, { useState, useEffect } from 'react';
import '../style/Config.css';
import Rodape from  './rodape';
import 'rodal/lib/rodal.css';
import Menu from './menu';
import { FcFolder } from 'react-icons/fc';
import PageUser from './pageUser';
import { useHistory } from 'react-router-dom';
import Edit from './edit';


const Config = (props) => {

    const [edit, setEdit] = useState("");
    const [trash, setTrash] = useState(false);
    const [type, setType] = useState("");
    const [placeholder, setPlaceholder] = useState("");

    useEffect(()=>{

        function compare(){
            if(edit === "Delete"){
                setType("text");
                setPlaceholder("type delete to confirm");
            }else if(edit === "Upload" || edit === "Avatar"){
                setType("file");
                setPlaceholder("upload: ")
            }else{
                setType("text");
                setPlaceholder("your new " + edit)
            }
        }

        compare();
    });
    const history =  useHistory();

    const exit = () =>{  
        
        localStorage.clear();
        return history.push("/login");
     
    }
    const on = () => {
 
        document.getElementById("div-config").style.display = "block";
    }

    const off = () => {
        document.getElementById("div-config").style.display = "none";
    }

    function onEdit(){
        document.getElementById("div-config").style.display = "none";
        document.getElementById("content-edit").style.display = "block";
    }

    function onTrash(){

    }



    return (
        <>
        <Edit name={edit }  placeholder={placeholder} type={type} />
        <div className="div-content">
        <Menu />
        <FcFolder className="icon-1"/>
        <button className="menu-button-Config" onClick={on}> Config </button>
        <button className="menu-button-Exit" onClick={exit}> Exit </button>
        <div id="div-config">
                <p classname="div-config-a" onClick={off}> X </p>
                <ul className="div-config-ul">
                    <li><button className="div-config-ul-button" value="Email" onClick={e => {setEdit("Email"); onEdit();}}><p>Edit Email </p></button></li>
                    <li><button className="div-config-ul-button" value="Password" onClick={e => {setEdit("Password"); onEdit();}}><p>Edit Password </p></button></li>
                    <li><button className="div-config-ul-button" value="Avatar" onClick={e => {setEdit("Avatar"); onEdit();}}><p>Edit Avatar </p></button></li>
                    <li><button className="div-config-ul-button" value="Delete" onClick={e => {setEdit("Delete"); onEdit();}}><p> Delete Accaount</p></button></li>
                    <li><button className="div-config-ul-button" value="Upload" onClick={e => {setEdit("Upload"); onEdit();}}><p>Upload file </p></button></li>
                    <li><button className="div-config-ul-button" value="Trash" onClick={e => {setTrash(true); onTrash();}}><p> Trash </p></button></li>
                </ul>
        </div>

        <PageUser trash={trash}/>
        <Rodape />
        </div>
        </>
    );
}


export default Config;