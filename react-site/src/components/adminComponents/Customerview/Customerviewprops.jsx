import React from "react"


const Customerviewprops = (props)=>{

    const PostStyle={
        backgroundColor: "#7badd1",
        color:"#fff",
        padding: "10px",
    }

    return (
            <div style={PostStyle}>
               UserID: <span>{props.id}</span>
               <br></br>
               Title: <span>{props.name}</span>
            </div>
    )
}
    
export default Customerviewprops;  