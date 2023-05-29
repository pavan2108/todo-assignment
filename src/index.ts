import express from 'express';
import dotenv from "dotenv";
import yaml from 'yamljs';
import swaggerUi from 'swagger-ui-express'

import connect from './Config/database';
import todoRouter from './todo/routes/todo.routes';



const app = express();
dotenv.config();

const PORT = process.env.PORT

app.use(express.json());

app.get('/', (req, res) => {
    res.send('<a href="/api-docs">Todo App Documetation</a>');
});

app.use('/api/v1/todo', todoRouter);

const swaggerJsDocs = yaml.load('./src/Config/swagger.yaml')

app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerJsDocs)
)

connect();
app.listen(PORT, () => console.log(`Now browse to http://localhost:${PORT}`));
