import React, {useState, useEffect } from "react";
import '../style/User.css';
import api from '../api/axios'
import { useHistory} from "react-router-dom";


const PageUser = (props) =>{
    
    const [image, setImage] = useState("");
    const [type, setType] = useState("");
   // const [placeholder, setPlaceholder] = useState("");
    const [data, setData] = useState([]);
    const [id, setId] = useState(0);
    const [err,setErr] = useState();
    const [confirm, setComfirm] = useState("");
    const history = useHistory();
    

    useEffect(()=>{
        async function get(){
            try{
                const token = localStorage.getItem('token');
        
                const response = await api.get('/list',{
                    headers:{
                        'x-access-token': token
                    }
                });

                setData(response.data.files)

            }catch(error){
                /*debug error*/

                //console.log(error.response.data.message)
                setErr("failed to authenticate token")
            
            }
        }

        get();
    }, [])

    useEffect(()=>{
       
    
        function compare(){
            if(image === "Delete"){
                setType("text");
                //setPlaceholder("type delete to confirm");
            }
            if(props.trash === true){
                console.log(12333)
                document.getElementById("div-file").style.display = "none";
                document.getElementById("div-file-trash").style.display = "block";
            }else if(props.trash === false){
                    document.getElementById("div-file").style.display = "block";
                    document.getElementById("div-file-trash").style.display = "none";
            }
            if(err === "failed to authenticate token"){
                localStorage.clear();
                 history.push('/login');
            }

        }

        compare();
    });


    async function moveTrash(e){
            e.preventDefault();         
            if(confirm === 'delete'){

            
                try{
                    const token = localStorage.getItem('token');
                    console.log(token)
                    const response = await api.delete(`/delete/${id}`,{
                        headers:{
                            'x-access-token': token
                        }
                    });
                    offEdit();
                    alert(response.data.message);
                    document.location.reload();
                 }catch(error){
                    alert(error.response.message);
                 }
            }else{
                alert("type delete to move to trash")
            }
            
        
      }

      async function deletePermanently(e){
         e.preventDefault();         
         if(confirm === 'delete'){

            
             try{
                 const token = localStorage.getItem('token');
                
                 const response = await api.delete(`/deleteForceUpload/${id}`,{
                     headers:{
                         'x-access-token': token
                     }
                 });
                 offEdit();
                 alert(response.data.message);
                 document.location.reload();
              }catch(error){
                 alert(error.response);
              }
         }else{
             alert("type delete to move to trash")
         }
      }


    const onImage = () => {
        
        document.getElementById("menu-image").style.display = "block";
    }
    const onImageTrash = () => {
        
        document.getElementById("menu-image-trash").style.display = "block";
    }

    const offImage = () => {
        document.getElementById("menu-image").style.display = "none";
    }

    const offImageTrash = () => {
        document.getElementById("menu-image-trash").style.display = "none";
    }

    function onEdit(){
        document.getElementById("menu-image").style.display = "none";
        document.getElementById("div-edit").style.display = "flex";
    }

    function onEditTrash(){
        document.getElementById("menu-image-trash").style.display = "none";
        document.getElementById("div-edit-trash").style.display = "flex";
    }

    async function onEditTrashRestore(e){

        e.preventDefault();         
           
            try{
                const token = localStorage.getItem('token');
               
                const response = await api.get(`/recoverUpload/${id}`,{
                    headers:{
                        'x-access-token': token
                    }
                });
                offEdit();
                alert(response.data.message);
                document.location.reload();
             }catch(error){
                alert(error.response);
             }
       
    }

    const offEdit = () => {
        
        document.getElementById("div-edit").style.display = "none";
    }

    const offEditTrash = () => {
        
        document.getElementById("div-edit-trash").style.display = "none";
    }

   

   
   
    return( 
        <div> 
            <div id="div-edit">
                <p  onClick={offEdit} > X </p>
                    <form onSubmit={moveTrash}>
                        <input id="if-to-file"  type={type}  value={confirm} onChange={e => {setType(e.target.type); setComfirm(e.target.value); }} placeholder="type delete to move to trash"/>
                        <button className="button-update"> confirm </button>
                    </form>
                </div>
                  <div id="div-file">
                      <ul>
                      <div id="menu-image">
                          <p  onClick={offImage}> X </p>
                        <ul className="div-config-ul">
                            <li><button className="div-config-ul-button-image" value={image} onClick={e =>{ setImage("Delete"); onEdit();}}><label>Delete image</label></button></li>
                        </ul>
                  </div>
                          { 
                            data.length !== 0 ? data.map(data =>{

                                if(data.name.split(".")[1] === "mp4" || data.name.split(".")[1] === "mp3"){
                                    return(<li key={data.id}>
                                        <video className="images" controls="controls" title={data.name} onClick={ e => { setId(data.id); onImage();}}>
                                          <source src={data.path}/>
                                        </video>
                                        <li className="li-video-audio" onClick={ e => { setId(data.id); onImage();}}>option</li>
                                    </li>)
                                }else if(data.name.split(".")[1] === "zip"){
                                   
                                    return(<li key={data.id}>
                                        <a href={data.path}>{data.name}</a>
                                    </li>)
                                }else{
                                    return(<li key={data.id}>
                                        <iframe id="video-audio" src={data.path} datatype={data.name.split(".")[1]} className="images" aria-details={data.name} title={data.name} onClick={ e => { setId(data.id); onImage(); }}></iframe>
                                    </li>)
                                }
                            }) : <h2>you don't have uploads</h2>
                        }
                      </ul>
            </div>
            
            <div id="div-file-trash">
            <div id="div-edit-trash">
                <p  onClick={offEditTrash} > X </p>
                    <form onSubmit={deletePermanently}>
                        <input id="if-to-file"  type={type}  value={confirm} onChange={e => {setType(e.target.type); setComfirm(e.target.value); }} placeholder="type delete to permanently delete"/>
                        <button className="button-update"> confirm </button>
                    </form>
                </div>
                        
                      <ul>
                      <div id="menu-image-trash">
                          <p  onClick={offImageTrash}> X </p>
                        <ul className="div-config-ul">
                            <li><button className="div-config-ul-button-image" value={image} onClick={e =>{ setImage("Delete"); onEditTrash();}}><label>Delete file</label></button></li>
                            <li><button className="div-config-ul-button-image" value={image} onClick={e =>{ setImage("restore"); onEditTrashRestore(e);}}><label>restore file</label></button></li>
                    </ul>
                    </div>
                          { 
                            props.dataTrash.length > 0 ? props.dataTrash.map(data =>{
                                if(data.name.split(".")[1] === "mp4" || data.name.split(".")[1] === "mp3"){
                                    return(<li key={data.id}>
                                        <video className="images" controls="controls" title={data.name} onClick={ e => { setId(data.id); onImageTrash();}}>
                                          <source src={data.path}/>
                                        </video>
                                        <li className="li-video-audio" onClick={ e => { setId(data.id); onImageTrash(); }}>option</li>
                                    </li>)
                                }else{
                                    return(<li key={data.id}>
                                        <iframe src={data.path} className="images" aria-details={data.name} title={data.name} onClick={ e => { setId(data.id); onImageTrash(); }}></iframe>
                                    </li>)
                                }
                            
                            }) : <h2> no files deleted </h2>
                        }
                      </ul>
            </div>
        </div>
    );
}

export default PageUser;