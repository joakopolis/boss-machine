const express = require('express');
const apiRouter = express.Router();
const { getAllFromDatabase, deleteFromDatabasebyId } = require('./db');


apiRouter.param('minionId', (req, res, next, id) => {
    const minionId = Number(id);
    const minionIndex = allMinions.findIndex(minion => minion.id === minionId);
    if (minionIndex !== -1) {
      req.minionIndex = minionIndex;
      next();
} else {
    res.status(404).send('Snack not found!');
  }
});

apiRouter.use((req, res, next) => {
    console.log('path accessed');
    next();
})


apiRouter.get('/minions', (req, res, next) => {
    res.send(getAllFromDatabase('minions'))
})

apiRouter.delete('/minions/:minionId', (req, res, next) => {
 
    allMinions.splice(req.minionIndex, 1);
    res.status(204).send();
  
});


module.exports = apiRouter;
