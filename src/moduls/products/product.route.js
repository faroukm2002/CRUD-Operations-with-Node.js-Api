import { query } from "../../../database/dbConnection.js";
import express from "express";
const router = express.Router();


router.get("/products", (req, res) => {
    query.execute(`select *from products`, (err, data) => {
      if (err) {
        res.json({ message: err ,err} );
      } else {
        res.json({ message: "Success",data } );
      }
    });
  });


  router.get("/products/:id", (req, res) => {
    const {id}=req.params
    query.execute(`select *from products where id=${id}`, (err, data) => {
      if (err) {
        res.json({ message: err ,err} );
      } else {
        res.json({ message: "Success",data } );
      }
    });
  });



  router.post("/products", (req, res) => {
    const { name, price, desc } = req.body;
    query.execute(
      `insert into products(name,price,description) values('${name}','${price}','${desc}')`
    );
  
    res.json({ message: "Success" });
  });



  router.delete("/products", (req, res) => {
    const {id}=req.body
    query.execute(`delete from products where id=${id}`)
   
        res.json({ message: "Success"} );
  });

  router.put("/products", (req, res) => {
    const { name, price, desc ,id} = req.body;
    query.execute
    (`update  products set name ='${name}',price ='${price}',description ='${desc}' where id=${id}`)

    res.json({ message: "Success" });
  });

  export default router