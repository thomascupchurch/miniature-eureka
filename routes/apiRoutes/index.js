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
    const newNote = {text: req.body, id: uuidv4()};
    
    
    const stringNote = JSON.stringify(newNote);
    fs.writeFileSync('./db/db.json', stringNote);
    res.json(stringNote);
    
    // add it to the db.json file,
    // fs.writeFileSync(notes, json, 'utf8', callback);
    // fs.readFile(notes, 'utf8', function readFileCallback(err, data){
    //     if(err){
    //         console.log(err);
    //     } else {
    //         obj = JSON.parse(data);
    //         obj.table.push({id: })
    //     }
    // })
    
    // then return the new note to the client
    

    
  });

//   DELETE /api/notes/:id should receive a query parameter containing the id of a note to delete. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.
router.delete('/notes/:id', (req, res) => {
    const toDelete = req.params.id;
    deleteNote(toDelete);
    res.send("deleted");
});

module.exports = router;