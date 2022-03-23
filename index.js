const express = require("express");
const app = express();
//var cors = require("cors");
app.use(express.json());
const courses = [
  { id: 1, name: "HTML" },
  { id: 2, name: "CSS" },
  { id: 3, name: "Python" },
  { id: 4, name: "Nodejs" },
];
//app.options("*", cors()); //Enabling cors for all the routes
app.get("/", (req, res) => {
  res.send("<h1>Welcome to learning Express</h1>");
});
//displaying all courses
app.get("/api/courses", (req, res) => {
  res.send(courses);
});

//displaying specific course based on a condition
app.get("/api/courses/:courseid", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.courseid));
  if (!course) res.status(404).send("Request with given id was not found");
  //else show the course
  res.send(course); //Can as well use dot notation to print only coursename
});

//Adding a post request
app.post("/api/courses/", (req, res) => {
  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});
const port = 3000;
//const port =process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Listening to ${port}`);
});
