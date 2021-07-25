import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import '../style/Main.css';



const ChangePage = (props) => {
    const [name, setName] = useState("");

    const history = useHistory();
    
    function changeName(){
        setName(props.name);
    }
    function change(){
           if(name === "singIn" || name === "Exit")
                history.push("/login");
            else if(name === "singUp")
                history.push("register");
            else if(name === "send")
                history.push("/pageUser");
    }

    return <div className={props.css}><button onClick={change} onMouseEnter={changeName}> {props.name} </button></div>
}


export default ChangePage;