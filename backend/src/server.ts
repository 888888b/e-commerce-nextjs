import express from 'express';
import mercadolivre_routes from './routes/mercadolivre';
import admin_routes from './routes/admin';

const server = express();

server.use('/mercadolivre', mercadolivre_routes);
server.use('/admin', admin_routes);

server.listen( 2150, () => console.log('Servidor rodando'));