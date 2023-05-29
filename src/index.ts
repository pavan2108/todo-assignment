import express from 'express';
import dotenv from "dotenv"
import { graphqlHTTP } from 'express-graphql';

import { root } from './Schema/schema';
import connect from './Config/database';

const app = express();
dotenv.config();

const PORT = process.env.PORT

app.use(
    '/graphql',
    graphqlHTTP({
        schema: root,
        graphiql: process.env.NODE_ENV === "development"
    })
);
connect();
app.listen(PORT, () => console.log(`Now browse to localhost:${PORT}/graphql`));
