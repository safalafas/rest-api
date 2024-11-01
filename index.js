const express = require("express");
const app = express();
require("dotenv").config();

// Middleware to parse JSON bodies
app.use(express.json());

let students = [];

// GET all students
app.get("/students", (req, res) => {
  res.json(students);
});

// GET student by ID
app.get("/students/:id", (req, res) => {
  const studentId = parseInt(req.params.id);
  const student = students.find((item) => item.id === studentId);

  if (student) {
    res.json(student);
  } else {
    res
      .status(404)
      .json({ error: `Couldn't find student with ID ${studentId}` });
  }
});

// POST new student
app.post("/students", (req, res) => {
  console.log(req.body);
  const { Name, Grade, Email } = req.body;

  // Validate required fields
  if (!Name || !Grade || !Email) {
    return res
      .status(400)
      .json({ error: "Name, Grade, and Email are required" });
  }

  const student = {
    id: Math.max(0, ...students.map((s) => s.id)) + 1, // Generate unique ID
    Name,
    Grade,
    Email,
  };

  students.push(student);
  res.status(201).json({
    message: "Successfully added student to the records",
    student,
  });
});

// PUT update student
app.put("/students/:id", (req, res) => {
  const studentId = parseInt(req.params.id);
  const studentIndex = students.findIndex((item) => item.id === studentId);

  if (studentIndex !== -1) {
    const { Name, Grade, Email } = req.body;

    // Validate required fields
    if (!Name || !Grade || !Email) {
      return res
        .status(400)
        .json({ error: "Name, Grade, and Email are required" });
    }

    // Update student while preserving the ID
    students[studentIndex] = {
      id: studentId,
      Name,
      Grade,
      Email,
    };

    res.json({
      message: "Successfully updated student records",
      student: students[studentIndex],
    });
  } else {
    res.status(404).json({ error: "No such record found to update" });
  }
});

// DELETE student
app.delete("/students/:id", (req, res) => {
  const studentId = parseInt(req.params.id);
  const initialLength = students.length;

  students = students.filter((item) => item.id !== studentId);

  if (students.length < initialLength) {
    res.json({ message: "Student deleted successfully" });
  } else {
    res.status(404).json({ error: "Student not found" });
  }
});

app.listen(80, () => {
  console.log("Listening on port " + process.env.PORT);
});
