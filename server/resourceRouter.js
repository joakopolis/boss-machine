const express = require('express');
const {
    getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
  } = require('./db');

const createResourceRouter = (model) => {
    const router = express.Router();

    router.param('id', (req, res, next, id) => {
    const instance = getFromDatabaseById(model, id)
    if (!instance) {
      return res.status(404).send(`${model.slice(0, -1)} not found!`)
    }
    req.instance = instance;
    next();
    });

    router.get('/', (req, res) => {
        res.send(getAllFromDatabase(model))
    });

    router.get('/:id', (req, res) => {
        res.send(req.instance);
    }
    );

    router.post('/', (req, res, next) => {
        const newInstance = addToDatabase(model, req.body);
        res.status(201).send(newInstance);
    });

    router.put('/:id', (req, res) => {
        const updateInstance = updateInstanceInDatabase(model, req.body);
        res.send(updateInstance);
    });
    
    router.delete('/:id', (req, res) => {
        deleteFromDatabasebyId(model, req.instance.id);
        res.status(204).send();
    });

    return router;
};

module.exports = createResourceRouter;