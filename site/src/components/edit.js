import React, { useState } from 'react';
import '../style/Edit.css'
import api from '../api/axios';
import { useHistory} from "react-router-dom";

const Edit = (props) => {
    const history = useHistory();
    const [file, setFile] = useState();
    const [confirm, setConfirm] = useState("");
   const offEdit = () => {
      
       document.getElementById("content-edit").style.display = "none";
   }
  const  edit = async (e) =>{
        e.preventDefault();
        
        if(props.type === "file" && props.name === "Avatar"){
            const formData = new FormData();

            formData.append("avatar",file);
            const token = localStorage.getItem("token");
            try{
                const response = await api.post("/update",formData,{
                    headers:{
                        'x-access-token': token
                    }
                })

                offEdit();
                alert(response.data.message);
                document.location.reload();
            }catch(error){
                alert(error.response.data.message);
            }
        }else if(props.type === "file" && props.name === "Upload"){
            const formData = new FormData();
             
            formData.append("avatar",file);
            const token = localStorage.getItem("token");
            try{
                const response = await api.post("/uploads",formData,{
                    headers:{
                        'x-access-token': token
                    }
                })
                
                offEdit();
                alert(response.data.message);
                document.location.reload();
            }catch(error){
//                console.log(error.response.data.message)
                alert(error.response.data.message);
            }

        }else if(props.name === "Delete"){
            
            if(confirm === 'delete'){

            
                try{
                    const token = localStorage.getItem('token');
                   
                    const response = await api.delete(`/deleteUser`,{
                        headers:{
                            'x-access-token': token
                        }
                    });
                    offEdit();
                    alert(response.data.message);
                    localStorage.clear();
                    history.push("/login");
                 }catch(error){
                    alert(error.response);
                 }
            }else{
                alert("type delete to delete account")
            }
        }else{
         
            const token = localStorage.getItem("token");
            try{
               
                if(props.name === "Email"){
                    const response = await api.post("/update",{"email": confirm},{
                            headers:{
                                    'x-access-token': token
                                    }
                                })

                                offEdit();
                                alert(response.data.message);
                                document.location.reload();

                    }else if(props.name === "Password"){
                            const response = await api.post("/update",{"password": confirm},{
                            headers:{
                                    'x-access-token': token
                                    }
                                })

                                offEdit();
                                alert(response.data.message);
                                document.location.reload();
                    }
            }catch(error){
                alert(error.response.data.message);
            }
                
        }
   }
    return (
        <div id="content-edit">
            <p className="content-edit-p" onClick={offEdit} > X </p>
            <form onSubmit={edit}>
                {
                    props.type==="file" ?   <><label htmlFor="if-to-file"> upload: {file != null ? file.name : null} </label> <input id="if-to-file" type={props.type}  placeholder={props.placeholder} onChange={e =>{ if(props.type==="file"){setFile(e.target.files[0])}else{setFile(e.target.value)}}} required/></> : <input id="if-to-file" type={props.type}  placeholder={props.placeholder}  value={confirm} onChange={e => setConfirm(e.target.value)} required/>  
                }
               
                <button className="button-update"> confirm </button>
            </form>
        </div>
    );
}

export default Edit;