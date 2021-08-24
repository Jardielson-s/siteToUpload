import React, { useState, useEffect } from 'react';
import '../style/Config.css';
import api from '../api/axios'
import Rodape from  './rodape';
import 'rodal/lib/rodal.css';
import Menu from './menu';
import PageUser from './pageUser';
import { useHistory } from 'react-router-dom';
import Edit from './edit';


const Config = (props) => {


    const [email, setEmail] = useState("");
    const [avatar, setAvatar] = useState("");
    const [dataTrash, setDataTrash] = useState([]);
    const [err,setErr] = useState();


    useEffect(()=>{
        async function get(){
            try{
                const token = localStorage.getItem('token');
        
                const response = await api.get('/list',{
                    headers:{
                        'x-access-token': token
                    }
                });
               
                setEmail(response.data.email)
                setAvatar(response.data.avatar)


            }catch(error){
                /*debug error*/

                //console.log(error.response.data.message)
                //setErr("failed to authenticate token")
            
            }
        }

        get();
    }, [])

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
            }else if(edit === "Email"){
                setType("text");
                setPlaceholder("your new " + edit)
            }if(edit==="Password"){
                setType("password");
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
        setTrash(false)
        document.getElementById("div-config").style.display = "none";
    }

    function onEdit(){
        document.getElementById("div-config").style.display = "none";
        document.getElementById("content-edit").style.display = "block";
    }

    async function onTrash(){
    
          
            try{
                const token = localStorage.getItem('token');
            
                const response = await api.get('/trash',{
                    headers:{
                        'x-access-token': token
                    }
                });
                if(response.data.uploads){
                    return setDataTrash(response.data.uploads);
                }
                setDataTrash(response.data)
                

             }catch(error){
                setErr("failed to authenticate token")
             }
    }



    return (
        <>
        <Edit name={edit}  placeholder={placeholder} type={type} />
        <div className="div-content">
        <Menu />
         <img src={avatar} alt="" className="icon-1"/>
        <button className="menu-button-Config" onClick={on}> Config </button>
        <button className="menu-button-Exit" onClick={exit}> Exit </button>
        <div id="div-config">
                <p className="div-config-a" onClick={off}> X </p>
                <ul className="div-config-ul">
                    <li><button className="div-config-ul-button" value="Email" onClick={e => {setEdit("Email"); onEdit();}}><p>Edit Email </p></button></li>
                    <li><button className="div-config-ul-button" value="Password" onClick={e => {setEdit("Password"); onEdit();}}><p>Edit Password </p></button></li>
                    <li><button className="div-config-ul-button" value="Avatar" onClick={e => {setEdit("Avatar"); onEdit();}}><p>Edit Avatar </p></button></li>
                    <li><button className="div-config-ul-button" value="Delete" onClick={e => {setEdit("Delete"); onEdit();}}><p> Delete Accaount</p></button></li>
                    <li><button className="div-config-ul-button" value="Upload" onClick={e => {setEdit("Upload"); onEdit();}}><p>Upload file </p></button></li>
                    <li><button className="div-config-ul-button" value="Trash" onClick={e => {setTrash(true); onTrash();}}><p> Trash </p></button></li>
                </ul>
        </div>

        <PageUser trash={trash} dataTrash={dataTrash} err={err}/>
        <Rodape link={email}/>
        </div>
        </>
    );
}


export default Config;