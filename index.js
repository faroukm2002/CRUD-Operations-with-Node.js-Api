 import express from 'express';
 import { query } from './database/dbConnection.js'
 import cors from 'cors';
import router from './src/moduls/products/product.route.js';

 const app = express();
const port = 3000;
app.use(router)


app.use(express.json());
app.use(cors());









app.listen(port, () => console.log(`Example app listening on port ${port}!`));
 