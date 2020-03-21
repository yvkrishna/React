import React from "react"

function UI(props){
    let recievedData = props.data.map(details =>{
    return(
        <div key={details.id}>
            <div>S.no : {details.id} </div>
            <div>Work : {details.content}</div> 
        </div>
    )
    })

    return(
        <div className="display">
            {recievedData}
        </div>
    )
}

export default UI