import { useState } from "react";
import { nanoid } from 'nanoid';
import NotesList from "./components/NotesList";


function App() {

  const [notes, setNotes] = useState([{
      id: nanoid(),
      text: "this is a note!",
      date: "06/03/1998"
    },
    {
      id: nanoid(),
      text: "this is a note!",
      date: "06/03/1998"
    },
    {
      id: nanoid(),
      text: "this is a note!",
      date: "06/03/1998"
    }
  ]);
/*pass new notes to NotesList*/
  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text:text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };
/*main rendering*/
  return (
    <div className="container">
     <NotesList 
        notes={notes}
        handleAddNote={addNote}/>
    </div>
  );
}

export default App;
