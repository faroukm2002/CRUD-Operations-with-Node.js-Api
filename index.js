 import express from 'express';
 import { query } from './database/dbConnection.js'
 import cors from 'cors';

 const app = express();
const port = 3000;


app.use(express.json());
app.use(cors());
app.post("/products", (req, res) => {
  const { name, price, desc } = req.body;
  query.execute(
    `insert into products(name,price,description) values('${name}','${price}','${desc}')`
  );

  res.json({ message: "Success" });
});


app.get("/products", (req, res) => {
  query.execute(`select *from products`, (err, data) => {
    if (err) {
      res.json({ message: err ,err} );
    } else {
      res.json({ message: "Success",data } );
    }
  });
});
app.get("/products/:id", (req, res) => {
    const {id}=req.params
    query.execute(`select *from products where id=${id}`, (err, data) => {
      if (err) {
        res.json({ message: err ,err} );
      } else {
        res.json({ message: "Success",data } );
      }
    });
  });


  app.delete("/products", (req, res) => {
    const {id}=req.body
    query.execute(`delete from products where id=${id}`)
   
        res.json({ message: "Success"} );
  });

  app.put("/products", (req, res) => {
    const { name, price, desc ,id} = req.body;
    query.execute
    (`update  products set name ='${name}',price ='${price}',description ='${desc}' where id=${id}`)

    res.json({ message: "Success" });
  });
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
 