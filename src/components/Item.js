import React, { useState } from "react"

export const Item = (props) =>{
    console.log(props)
    return(
        <div className="itemContainer">
            <img src={props.image} width="auto" height="auto"/>
        </div>
    )
}