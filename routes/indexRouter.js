import express from 'express';
import crypto from 'node:crypto';
import NotFoundError from '../errors/NotFoundError.js';
import * as db from '../models/messagesDB.js';

const indexRouter = express.Router();

indexRouter.get('/', (req, res) => {
  res.render('index', {
    title: 'Home',
    messages: db.messages,
  });
});

indexRouter.get('/new-message', (req, res) => {
  res.render('new', { title: 'Send Message' });
});

indexRouter.post('/new', (req, res) => {
  const timestamp = new Date();
  const id = crypto.randomUUID();
  const msg = {
    user: req.body.user,
    content: req.body.content,
    timestamp,
    id,
  };

  db.messages.push(msg);
  res.redirect('/');
});

indexRouter.get('/message/:messageId', (req, res) => {
  const message = db.getMessageById(req.params.messageId);
  if (!message) {
    throw new NotFoundError('Message not found');
  }

  res.render('messageDetails', { title: 'Message Details', message });
});

indexRouter.use((req, res) => {
  res.status(404).render('error', { errMsg: 'Page Not Found' });
});

indexRouter.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).render('error', { errMsg: err.message });
});

export default indexRouter;
