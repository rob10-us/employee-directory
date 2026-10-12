import express from "express";
import employees from "#db/employees";

const app = express();

export default app;

app.get("/", (req, res) => {
  res.send("Hello employees!");
});

app.get("/employees", (req, res) => {
  res.send(employees);
});

app.get("/employees/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * employees.length);
  const employee = employees[randomIndex];

  res.send(employee);
});

app.get("/employees/:id", (req, res) => {
  const { id } = req.params;
  const employee = employees.find((employee) => employee.id === Number(id));

  if (!employee) {
    return res.status(404).send(`No Employee found with the id of ${id}`);
  }

  res.send(employee);
});
