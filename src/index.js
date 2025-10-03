const express = require("express");
const app = express();
const PORT = 3000;

// main branch
app.get("/", (req, res) => {
    res.send("Hello World");
});

// about branch
app.get("/about", (req, res) => {
    res.send("About Page");
});

// contact branch
app.get("/contact", (req, res) => {
    res.send("Contact Page");
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
