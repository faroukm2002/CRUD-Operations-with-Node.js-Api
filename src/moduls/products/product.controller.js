import { query } from "../../../database/dbConnection.js";

const getAllProducts=(req, res) => {
  query.execute(`select *from products`, (err, data) => {
    if (err) {
      res.json({ message: err ,err} );
    } else {
      res.json({ message: "Success",data } );
    }
  });
}


const getProductsById=(req, res) => {
  const {id}=req.params
  query.execute(`select *from products where id=${id}`, (err, data) => {
    if (err) {
      res.json({ message: err ,err} );
    } else {
      res.json({ message: "Success",data } );
    }
  });
}




const addProducts=(req, res) => {
  const { name, price, desc } = req.body;
  query.execute(
    `insert into products(name,price,description) values('${name}','${price}','${desc}')`
  );

  res.json({ message: "Success" });
}




const deleteProducts=(req, res) => {
  const {id}=req.body
  query.execute(`delete from products where id=${id}`)
 
      res.json({ message: "Success"} );
}


const updateProducts=(req, res) => {
  const { name, price, desc ,id} = req.body;
  query.execute
  (`update  products set name ='${name}',price ='${price}',description ='${desc}' where id=${id}`)

  res.json({ message: "Success" });
}



export {
  getAllProducts,
  getProductsById,
  addProducts,
  deleteProducts,
  updateProducts
}