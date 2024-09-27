import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
	res.send("<h1>Hello</h1>");
});

app.get("/about", (req, res) => {
	res.send("<h1>About Me</h1><p>My name is Cuong Tran.</p>");
});

app.get("/contact", (req, res) => {
	res.send("<h1>Contact me</h1><p>Email: emsignouc0407@gmail.com</p>");
});

app.listen(port, () => {
	console.log(`Server running on port ${port}.`);
});
