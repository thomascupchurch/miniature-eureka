const router = require('express').Router();
const { notes } = require('../../Develop/db/db.json');
const { v4: uuidv4 } = require('uuid');

router.get('/api/notes', (req, res) => {
    let results = notes;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
});

router.post('/api/notes', (req, res) => {
    // receive a new note to save on the request body, 
    const newNote = {text: req.body, id: uuid()};
    // add it to the db.json file,
    
    // then return the new note to the client
    
    
    // give each note a unique id when it's saved (research npm packages) npm install uniqid
    
    
    
    
    // req.body.id = animals.length.toString();
  
    // // if any data in req.body is incorrect. send 400 error back
    // if (!validateAnimal(req.body)) {
    //   res.status(400).send('The animal is not properly formatted.');
    // } else {
    //   // add animal to json file and animals array in this function
    //   const animal = createNewAnimal(req.body, animals);
    //   res.json(animal);
    // }
  });
  


// router.use(zookeeperRoutes);
// router.use(animalRoutes);

module.exports = router;