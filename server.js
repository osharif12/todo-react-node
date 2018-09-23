/**
 * Omar Sharif, CS 690, Fitness Tracker
 */

const express = require("express");
const app = express();
app.use(express.json()); // this will make the app parse json body sent in the POST request
const database = require("./todoDB"); // connect to database
database.connect();

const port = process.env.PORT || 5000;

app.post("/list/create", (req, res) => {
  if (!req.body.title || req.body.title.length < 1) {
    res.status(400).send("title is required and should be minimum 1 character");
  } else {
    database.addList(req, res);
  }
});

app.get("/list", (req, res) => {
  database.getLists(res);
});

app.post("/list/item/create", (req, res) => {
  var id = req.body.id;
  console.log("id = " + id);
  if (!id) res.status(400).send("list id is required!");
  else if (!req.body.content || req.body.content.length === 0)
    res
      .status(400)
      .send("content is required and should be minimum 1 character");
  else {
    console.log("adding item");
    database.addItem(req, res);
  }
});

app.put("/list/item", (req, res) => {
  var id = req.body.id;
  console.log("id = " + id);
  if (!req.params.id) res.status(400).send("Item id is required.");
  else {
    database.updateItem(req, res);
  }
});

app.delete("/list/delete", (req, res) => {
  if (!req.body.id) res.status(400).send("Invalid list ID");
  else {
    database.deleteList(req, res);
  }
});

/*
app.get("/api/hello", (req, res) => {
  res.send({ express: "**This is from the Express server" });
});

app.get("/api/hello2", (req, res) => {
  res.send({ express: "Message 2 from the Express server" });
});
*/

app.listen(port, () => console.log(`Listening on port ${port}`));
