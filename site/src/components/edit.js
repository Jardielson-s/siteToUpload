import React, { useState } from 'react';
import '../style/Edit.css'


const Edit = (props) => {
   
    const [file, setFile] = useState("");

   const offEdit = () => {
       setFile(null)
       document.getElementById("content-edit").style.display = "none";
   }
   const edit= (e) =>{
        e.preventDefault();
       alert("hello")
   }
    return (
        <div id="content-edit">
            <p className="content-edit-p" onClick={offEdit} > X </p>
            <form onSubmit={edit}>
                {
                    props.type==="file" ?   <label for="if-to-file"> upload: {file} </label> : null  
                }
                <input id="if-to-file" type={props.type} placeholder={props.placeholder} value={file} onChange={e => setFile(e.target.value)}/>
                <button className="button-update"> confirm </button>
            </form>
        </div>
    );
}

export default Edit;