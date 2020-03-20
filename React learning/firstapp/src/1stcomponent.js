import React from 'react';


function Comp({data , deletemem}){ 
    const datalist = data.map(datalis => {
        return(
            <div className="comp" key={datalis.id}>
                <div>Name: {datalis.name}</div>
                <div>Age : {datalis.age}</div>
                <div>Belt : {datalis.belt}</div>
                <button type="button" onClick={() => {deletemem(datalis.id)} }>Delete Member</button>
                <br></br>
            </div>  
        )
        })
        return(
        <div className="data-list">
            {datalist}
        </div>
        )
}

export default Comp