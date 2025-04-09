import path from 'node:path';
import express from 'express';
import indexRouter from './routes/indexRouter.js';

const app = express();
const PORT = 3000;

app.set('views', path.join(import.meta.dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(import.meta.dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
