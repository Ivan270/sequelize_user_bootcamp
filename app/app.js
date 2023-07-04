import express from 'express';
import usersRoutes from './routes/users.routes.js';
import bootcampsRoutes from './routes/bootcamps.routes.js';
import homeRoutes from './routes/home.routes.js';
import { create } from 'express-handlebars';
import * as path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const hbs = create({
	partialsDir: [path.join(__dirname, 'views/partials/')],
});
const publicFolder = path.join(__dirname, '../public');

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

//definir rutas
app.use('/', homeRoutes);
app.use('/user', usersRoutes);
app.use('/bootcamp', bootcampsRoutes);
export default app;
