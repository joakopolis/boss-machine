const express = require('express');
const createResourceRouter = require('./resourceRouter.js')
const meetingRouter = require('./meetingRouter.js')

const apiRouter = express.Router();

apiRouter.use('/minions', createResourceRouter('minions'));
apiRouter.use('/ideas', createResourceRouter('ideas'));
apiRouter.use('/meetings', meetingRouter)

module.exports = apiRouter;