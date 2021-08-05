import React, {useState, useEffect} from "react";
import img from '../images/people-file.jpg';
import '../style/User.css';



const PageUser = (props) =>{
    const [image, setImage] = useState("");
    const [type, setType] = useState("");
    const [placeholder, setPlaceholder] = useState("");

    useEffect(()=>{

        function compare(){
            if(image === "Delete"){
                setType("text");
                setPlaceholder("type delete to confirm");
            }else{
                setType("text");
                setPlaceholder("your new " + image)
            }
        }

        compare();
    });
    const onImage = () => {
        document.getElementById("menu-image").style.display = "block";
    }


    const offImage = () => {

        document.getElementById("menu-image").style.display = "none";
    }

    function onEdit(){
        document.getElementById("menu-image").style.display = "none";
        document.getElementById("div-edit").style.display = "block";
    }

    const offEdit = () => {
        document.getElementById("div-edit").style.display = "none";
    }

    const edit= (e) =>{
        e.preventDefault();
       alert("hello")
   }
    
    return(
        <> 
                <div id="div-edit">
                <p className="content-edit-p" onClick={offEdit} > X </p>
                    <form onSubmit={edit}>
                        <input id="if-to-file" type={type} placeholder={placeholder}/>
                        <button className="button-update"> confirm </button>
                    </form>
                </div>
                  <div className="div-file">
                      <ul>
                          <li> <img  className="images" src={img} alt="son goku" title="son goku" onClick={onImage}/></li>
                          <li> <img  className="images" src={img} alt="" onClick={onImage}/> </li>
                          <li> <img  className="images" src={img} alt="" onClick={onImage}/> </li>
                          <li> <img  className="images" src={img} alt="" onClick={onImage}/> </li>
                          <li> <img className="images" src={img} alt="" onClick={onImage}/> </li>
                          <li> <img className="images" src={img} alt="" onClick={onImage}/> </li>
                          <li> <img className="images" src={img} alt="" onClick={onImage}/> </li>
                          <li> <img className="images" src={img} alt="" onClick={onImage}/> </li>
                      </ul>
                      <div id="menu-image">
                          <p className="edit-X" onClick={offImage}> X </p>
                        <ul className="div-config-ul">
                            <li><button className="div-config-ul-button-image" value={image} onClick={e =>{ setImage("Name"); onEdit();}}><p>Edit Name{console.log(image)}</p></button></li>
                            <li><button className="div-config-ul-button-image" value={image} onClick={e =>{ setImage("Delete"); onEdit();}}><p>Delete image</p></button></li>
                        </ul>
                  </div>
            </div>
        </>
    );
}


export default PageUser;