const express = require('express');
const {
    createMeeting,
    getAllFromDatabase,
    addToDatabase,
    deleteAllFromDatabase,
  } = require('./db');

const meetingRouter = express.Router();

meetingRouter.get('/', (req, res) => {
    const meetings = getAllFromDatabase('meetings');
    res.send(meetings);
});

meetingRouter.post('/', (req, res) => {
    const newMeeting = createMeeting(req.body);
    addToDatabase('meetings', newMeeting);
    res.send(newMeeting);
});

meetingRouter.delete('/', (req, res) => {
    deleteAllFromDatabase('meetings');
    res.status(204).send();
})

module.exports = meetingRouter;