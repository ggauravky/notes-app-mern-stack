import express from "express";

const app = express();

app.get("/api/notes", (req, res) =>{
    res.status(200).send("Hello from backend yes");
});

app.post("/api/notes", (req, res) =>{
    res.status(201).send("Note created");
});

app.put("/api/notes/:id", (req, res) =>{
    res.status(200).send("Note updated");
});

app.delete("/api/notes/:id", (req, res) =>{
    res.status(200).send("Note deleted");
});

app.listen(5001, () => {
  console.log("Server is running on port 5001");
});
