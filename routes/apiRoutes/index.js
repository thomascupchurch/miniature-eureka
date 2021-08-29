const router = require('express').Router();
const fs = require("fs");
const { notes } = require('../../db/db.json');
const { v4: uuidv4 } = require('uuid');


router.get('/notes', (req, res) => {
    const db = JSON.parse(fs.readFileSync('./db/db.json'));
    res.send(db);
});

router.post('/notes', (req, res) => {
    // receive a new note to save on the request body, 
    const db = JSON.parse(fs.readFileSync('./db/db.json'));
    
    const newNote = {title: req.body.title, text: req.body.text, id: uuidv4()};
    
    db.push(newNote);

    const stringDb = JSON.stringify(db);

    fs.writeFileSync('./db/db.json', stringDb);
    res.json(db);
  });

//   DELETE /api/notes/:id should receive a query parameter containing the id of a note to delete. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.
router.delete('/notes/:id', (req, res) => {
    const db = JSON.parse(fs.readFileSync('./db/db.json'));
    
    const toDelete = req.params.id;
     
    const editedDb = db.filter(note => note.id !== toDelete);
    
    const stringEditedDb = JSON.stringify(editedDb);

    fs.writeFileSync('./db/db.json', stringEditedDb);

    res.send("deleted");
});

module.exports = router;