import React from "react";
import '../style/Rodape.css';


const Rodape = (props) => {

    return(
        <div className="Rodape">
            <div className="rodape-div">
               <a className="Link" href={props.link}>
                   from {props.link}
                </a>
            </div>
        </div>
    );
}


export default Rodape;