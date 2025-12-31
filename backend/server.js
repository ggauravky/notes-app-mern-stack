import express from "express";

const app = express();

app.get("/api/notes", (req, res) =>{
    //send the notes
    res.send("Hello from backend");
});

app.post("/api/notes", (req, res) =>{
    //create the notes
    res.send("Hello from backend");
});

app.listen(5001, () => {
  console.log("Server is running on port 5001");
});
