import './App.css';
import Header from './components/Header';
import InputBox from './components/inputBox';
import Note from './components/note';
import { useState } from 'react';

const App=()=>{
  const [notes,setNotes]=useState([]);
  const [pining, setPining] = useState(0);
  const addNote=(freshNote)=>{
    setNotes(initialValue=>{
      return [...initialValue,freshNote];
    });
  }
  const changePin = (id) => {

    let countPin=0;
    for(let i=0;i<notes.length;i+=1){
      if(notes[i].id===id){
        notes[i].pinStatus=!notes[i].pinStatus;
        if(notes[i].pinStatus){
          setPining(pining+1);
        }
        else{
          setPining(pining-1);
        }
      }
      countPin+=notes[i].pinStatus;
      console.log(notes[i].pinStatus);
    }
    console.log('nums of pins ',countPin);
  } 

  if(!pining){
    return (
      <div className="App">
          <Header />
          <InputBox onAdd={addNote}/>
          {notes.map((note) => (
              <div className={`note-item`}>
                <Note 
                key={note.id}
                id={note.id}
                notebody={note.notebody} 
                color={note.color}
                changePin = {changePin}
                pinStatus={false}
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
          <div className='divided'>
            <div className='pinned'>
              <p><b>Pinned Notes</b></p>
              {notes.map(function(note){
                  if(note.pinStatus===true){
                    return <div className={`note-item`}>
                      <Note 
                        key={note.id}
                        id={note.id}
                        notebody={note.notebody} 
                        color={note.color}
                        changePin = {changePin}
                        pinStatus={true}
                      />
                    </div>
                  }   
              })}
            </div>
            <div className='unpinned'>
              <p><b>Other Notes</b></p>
              {notes.map(function(note){
                  if(note.pinStatus===false){
                    return <div className={`note-item`}>
                      <Note 
                        key={note.id}
                        id={note.id}
                        notebody={note.notebody} 
                        color={note.color}
                        changePin = {changePin}
                        pinStatus={false}
                      />
                    </div>
                  }   
              })}

            </div>

          </div>
          
          
      </div>
    );
  }
    
}
  


export default App;
