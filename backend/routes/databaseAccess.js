const express = require('express');
const router = express.Router();
let models = require('../models/TodoItem');
let TodoItem = models.TodoItem;
const axios = require('axios');
const dbUrl = "http://localhost:3000/db";

router.get('/add', (req, res) => {
  const testTodo = new TodoItem({
     task: "test task"
   });

   testTodo.save()
     .then(response => {
       res.send(response);
     })
     .catch(error => {
       res.send(error);
     })
   });
});

axios.post(dbUrl + '/add', /*POST_BODY_HERE*/)
  .then(function (response) {
    // Do whatever you want with the request's response in here
  })
  .catch(function (error) {
    // Do whatever you want in the event of an error in here
  });


module.exports = router;
