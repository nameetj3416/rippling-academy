import './App.css';
import Header from './components/Header';
import InputBox from './components/inputBox';
import Note from './components/note';
import { useState } from 'react';
import Masony from "react-masonry-component";

const masonryOptions = {
  fitWidth: true,
  columnWidth: 300,
  gutter: 30,
  itemSelector: ".note-item",
};
const App=()=>{
  const [notes,setNotes]=useState([]);
  const addNote=(freshNote)=>{
    setNotes(initialValue=>{
      return [...initialValue,freshNote];
    });
  }
  const isPinned=()=>{
    console.log('entered here');
    for(let i=0;i<notes.length;i+=1){
      if(notes[i].isPinned){
        return true;
      }
    }
    return false;
  }
  if(!isPinned()){
    return (
      <div className="App">
          <Header />
          <InputBox onAdd={addNote}/>
          {notes.map((note,index) => (
              <div className={`note-item`}>
                <Note 
                key={index}
                notebody={note.notebody} 
                color={note.color}
              />
            </div>
          ))}
      </div>
    );
  }
  else{
    return (
      <div className="App">
          <Header />
          <InputBox onAdd={addNote}/>
          <p>Pinned Notes</p>
          {notes.map(function(note,index){
              if(note.pinned===true){
                return <div className={`note-item`}>
                  <Note 
                    key={index}
                    notebody={note.notebody} 
                    color={note.color}
                  />
                </div>
              }   
          })}
          <p>Other Notes</p>
          {notes.map(function(note,index){
              if(note.pinned===false){
                return <div className={`note-item`}>
                  <Note 
                    key={index}
                    notebody={note.notebody} 
                    color={note.color}
                  />
                </div>
              }   
          })}
      </div>
    );
  }
    
}
  


export default App;
