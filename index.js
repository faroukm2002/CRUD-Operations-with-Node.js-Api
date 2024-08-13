 import express from 'express';
 import cors from 'cors';
import router from './src/moduls/products/product.route.js';

 const app = express();
const port = 3000;


app.use(express.json());
app.use(cors());

app.use(router)








app.listen(port, () => console.log(`Example app listening on port ${port}!`));
 