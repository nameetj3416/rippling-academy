import React from 'react'

const Note=({notebody,color,pinStatus,changePin,id})=> {
    const handleClick=()=>{
        console.log(id);
        changePin(id);   
    }
    if(pinStatus===false){
        return (
            <div className='note' style={{backgroundColor: color}}>
                <img src={require('../images/unpinned.png')} className="pin" onClick={handleClick}></img>
                <h2>{notebody.split(' ').slice(0,3).join(' ')}</h2>
                <p>{notebody}</p>
                
            </div>
        )
    }
    else{
        return (
            <div className='note' style={{backgroundColor: color}}>
                <img src={require('../images/pinned.png')} className="pin" onClick={handleClick}></img>
                <h2>{notebody.split(' ').slice(0,3).join(' ')}</h2>
                <p>{notebody}</p>
                
            </div>
        )
    }
    
}
export default Note;