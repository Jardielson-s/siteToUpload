import React from "react";
import img from '../images/people-file.jpg';
import '../style/User.css';

const PageUser = () =>{

    const onImage = () => {
        document.getElementById("menu-image").style.display = "block";
    }


    const offImage = () => {

        document.getElementById("menu-image").style.display = "none";
    }

    
    return(
        <> 
                  <div className="div-file">
                      <ul>
                          <li> <img className="images" src={img} alt="" onClick={onImage}/> </li>
                          <li> <img className="images" src={img} alt="" onClick={onImage}/> </li>
                          <li> <img className="images" src={img} alt="" onClick={onImage}/> </li>
                          <li> <img className="images" src={img} alt="" onClick={onImage}/> </li>
                          <li> <img className="images" src={img} alt="" onClick={onImage}/> </li>
                          <li> <img className="images" src={img} alt="" onClick={onImage}/> </li>
                          <li> <img className="images" src={img} alt="" onClick={onImage}/> </li>
                          <li> <img className="images" src={img} alt="" onClick={onImage}/> </li>
                      </ul>
                      <div id="menu-image">
                     <ul className="div-config-ul" onClick={offImage}>
                        <li><button className="div-config-ul-button-image"><p>Edit Name</p></button></li>
                        <li><button className="div-config-ul-button-image"><p>Delete image</p></button></li>
                    </ul>
                  </div>
            </div>
        </>
    );
}


export default PageUser;