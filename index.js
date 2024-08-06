const express = require("express");
const app = express();
const port = 3000;
// npm i mysql2
const mysql = require("mysql2");
const query = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "shopping",
  port: "3308",
});
app.use(express.json());

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
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
