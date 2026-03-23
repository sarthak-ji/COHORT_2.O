/*

- server create krna
- server ko config krna

*/

const express = require("express");

const app = express();

app.use(express.json());


const notes = [];

app.post("/notes", (req, res) => {
    console.log(req.body);  // "req.body": large data ke liye 
    notes.push(req.body);
    res.send("Note created successfully!");
});


app.get("/notes", (req, res) => {
    res.send(notes);
});


app.delete("/notes/:index", (req, res) => {
    delete notes[req.params.index];
    console.log(req.params.index);  // "req.params": small or, single valued data ke liye 

    res.send("Note deleted successfully!");
});


app.patch("/notes/:index", (req, res) => {
    notes[req.params.index].title = req.body.title;
    console.log(req.params.index);

    res.send = ("Note modified successfully!");
})


module.exports = app;