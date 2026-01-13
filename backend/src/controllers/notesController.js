import Note from '../models/Note.js';

export async function getAllNotes(_, res) {
    try{
        const notes = await Note.find().sort({ createdAt: -1 });
        res.status(200).json(notes);
    }catch(error){
        console.log("Error in getAllNotes Controller",error);
        res.status(500).json({ message: "Server Error" });
    }
};

export async function getNotesById(req, res) {
    try{
        const note = await Note.findById(req.params.id);
        if(!note){
            return res.status(404).json({ message: "Note not found" });
        }
        res.status(200).json(note);
    }catch(error){
        console.log("Error in getNotesById Controller",error);
        res.status(500).json({ message: "Server Error" });
    }
};

export async function createNote(req, res) {
    try{
        const { title, content } = req.body;
        const newNote = new Note({ title, content });
        await newNote.save();
        res.status(201).json({message: "Note created successfully"});
    }catch(error){
        console.log("Error in createNote Controller",error);
        res.status(500).json({ message: "Server Error" });
    }
};

export async function updateNote(req, res) {
    try{
        const {title, content} = req.body;
        const uppdatedNote = await Note.findByIdAndUpdate(
            req.params.id,
            {title, content},{new: true}
        );
        res.status(200).json({message: "Note updated successfully"});
    }catch(error){
        console.log("Error in updateNote Controller",error);
        res.status(500).json({ message: "Server Error" });
    }
};

export async function deleteNote(req, res) {
    try{
        await Note.findByIdAndDelete(req.params.id);
        res.status(200).json({message: "Note deleted successfully"});
    }catch(error){
        console.log("Error in deleteNote Controller",error);
        res.status(500).json({ message: "Server Error" });
    }
};