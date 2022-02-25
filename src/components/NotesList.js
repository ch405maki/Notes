import Note from "./Note";
import AddNote from "./AddNote";

/*=notes from app.js*/
const NotesList = ({ notes, handleAddNote, handleDeleteNote}) => {
    /*function to Map Params From Notes to Note So that you can pass it to Note.js*/
    return (
        /*=passing from app.js*/
        <div className='notes-list'>
            {notes.map((note) => (
                <Note
                    id={note.id}
                    text={note.text}
                    date={note.date} 
                    handleDeleteNote={handleDeleteNote}
                />
            ))}
            <AddNote handleAddNote={handleAddNote}/>
        </div>

    );
    
};

export default NotesList;