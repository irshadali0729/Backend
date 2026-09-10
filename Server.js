const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors())

app.get("/", (req, res) => {
  console.log("Home page api /");
  res.status(201).send("<h3>Listing from Backend </h3>");
});

const profile={
    name:"irshad",
    add:"telco"
}

app.get("/profile", (req, res) => {
  console.log("Home page api /");
  res.status(201).json({
    profile,
  });
});

app.listen(8000, () => {
  console.log("Server is listening on the port : ", 8000);
});
