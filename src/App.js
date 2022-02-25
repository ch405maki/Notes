import { useState , useEffect} from "react";
import { nanoid } from 'nanoid';
import NotesList from "./components/NotesList";
import Header from "./components/Header";



function App() {

  const [notes, setNotes] = useState([{
      id: nanoid(),
      text: "Sample Text...",
      date: "06/03/1998"
    },
  ]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data')
    );
    if (savedNotes){
      setNotes(savedNotes);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(
      'react-notes-app-data',
        JSON.stringify(notes)
    );
  }, [notes])

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

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

/*main rendering*/
  return (
    <div className="container">
      <Header/>
     <NotesList 
        notes={notes}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
}

export default App;
