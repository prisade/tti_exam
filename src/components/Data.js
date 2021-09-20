import { useState } from 'react'

const Data = ({ data, content }) => {

    let defaultCont;
    let DefaultTitle;

    if(content === ''){
        if(data.length > 0){
            DefaultTitle = data[0].title
            defaultCont = data[0].body
        }
    }else{
        DefaultTitle = content.title
        defaultCont = content.body
    }
    
    return (

        <div className="container" style={{marginTop:30}}>
            <h2>{DefaultTitle}</h2>
                <div className="panel panel-default">
                    <div className="panel-body" >{defaultCont}</div>
                </div>
        </div>
    )
}

const imgStyle = {
    maxHeight: 110,
    padding: 15,
    maxWidth: 225
}

export default Data
