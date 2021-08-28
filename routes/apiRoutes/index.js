const router = require('express').Router();
const fs = require("fs");
// const { notes } = require('../../Develop/db/db.json');
const { v4: uuidv4 } = require('uuid');

router.get('/notes', (req, res) => {
    const db = JSON.parse(fs.readFileSync("./db/db.json"));
    res.send(db);
});

router.post('/notes', (req, res) => {
    // receive a new note to save on the request body, 
    const newNote = {text: req.body, id: uuidv4()};
    res.json(newNote);
    // add it to the db.json file,
    const db = JSON.parse(fs.writeFileSync("./db/noteFile.json"))
    res.send(db);
    // then return the new note to the client
    
    
    // give each note a unique id when it's saved (research npm packages) npm install uniqid
    
  });
  

//   DELETE /api/notes/:id should receive a query parameter containing the id of a note to delete. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.
// router.delete('/notes/:id', (req, res) )
// const db = JSON.parse()


module.exports = router;