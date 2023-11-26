import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import mustache from 'mustache-express';
import mainRoutes from './routes/index'

const server = express();

dotenv.config();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '../public')));

server.use(mainRoutes);

server.use((req, res) => {
    res.send('erro 404')
})

server.listen(process.env.PORT);