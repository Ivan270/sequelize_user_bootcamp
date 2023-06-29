import express from 'express';
import usersRoutes from './routes/users.routes.js';
import bootcampsRoutes from './routes/bootcamps.routes.js';

const app = express();
app.use(express.json());

//definir rutas
app.use('/api/v1/user', usersRoutes);
app.use('/api/v1/bootcamp', bootcampsRoutes);
export default app;
