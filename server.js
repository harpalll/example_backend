import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
import blog from "./routes/blog.js";
import ejs from "ejs";
import mongoose from "mongoose";
import { Todo } from "./models/Todo.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.set("view engine", "ejs");
const port = 3000;

// let connection = await mongoose.connect("mongodb://127.0.0.1:27017/todo");

app.get("/", (req, res) => {
  // const todo = new Todo({
  //   title: "math",
  //   desc: "math hw",
  //   isCompleted: false,
  //   days: 6,
  // });
  // todo.save();
  res.send("Hello World!");
});

// app.get("/gettodo", async (req, res) => {
//   let todo = await Todo.findOne({});
//   res.json({title: todo.title, desc: todo.desc});
// });

//* Middlewares
// app.use(express.static("public"));
// app.use("/blog", blog);

//* EJS
// app.get("/index", (req, res) => {
//   let fooA = [1, 2, 3];
//   res.render("index", { foo: "FOO", fooA });
// });

//* Chaining
// app
//   .get("/", (req, res) => {
//     res.send("Hello World!");
//   })
//   .get("/json", (req, res) => {
//     res.json({ isAdmin: true });
//   })
//   .post("/", (req, res) => {
//     res.json({ isAdmin: true });
//   });

//* Sending HTML files
// app.get("/layout", (req, res) => {
//   res.sendFile("templates/index.html", { root: __dirname });
// });

// app.get("/profile/:name", (req, res) => {
//   let userName = req.params.name;
//   let isAdmin = req.query.isAdmin;
//   let result =
//     isAdmin === "true"
//       ? `Welcome ${userName} <h1>Admin</h1>`
//       : `Welcome ${userName} <h1>User</h1>`;
//   res.send(result);
// });

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
