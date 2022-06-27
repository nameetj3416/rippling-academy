import React from 'react'
import { useState } from 'react';

const Note=({notebody,color})=> {
    const [note,setNote]=useState(false);
    const handleClick=(e)=>{
        setNote((preValue)=>{
            if(preValue===false){
                return true;
            }
            else{
                return false;
            }
        });
    }
    return (
        <div className='note' style={{backgroundColor: color}}>
            <img src={require('../images/unpinned.png')} className="pinned" onClick={handleClick}></img>
            <h2>{notebody.split(' ').slice(0,3).join(' ')}</h2>
            <p>{notebody}</p>
            
        </div>
    )
}
export default Note;