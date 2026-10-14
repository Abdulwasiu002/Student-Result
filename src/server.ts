import express from "express";

const app = express();
app.use(express.json());
const PORT= 2030;

app.get("/", (req, res) => {
  res.json({
    message: "Server is running"
  });
});


app.get("/students", (req, res) => {
  res.json({
    message: "Student list will appear here"
  });
});


app.post("/students", (req, res) => {
  res.json({
    message: "Student  Created Successfully"
  });
});


app.patch("/students", (req, res) => {
  res.json({
    message: "Student Data Updated"
  });
});


app.delete("/students", (req, res) => {
  res.json({
    message: "Student Deleted"
  });
});


app.listen(2030, () => {
  console.log(`Server is running on port http://localhost:${PORT}`)});


