import React from "react";

export default function Alert(props){
    const capitalize=(word)=>{
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return(
        <div style={{height:"70px"}}>
            {props.alert && <div>
                <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                    {capitalize(props.alert.type)}: {props.alert.message}
                </div>
            </div>}
        </div>
    );
}