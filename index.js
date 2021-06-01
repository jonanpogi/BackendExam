const express = require("express");
const UserRouter = require("./routes/Users");

let app = express();
app.use(express.json());

app.use("/api", UserRouter);

const port = 3000;
app.listen(port, () => {
    console.log("Express is now Running at port: ", port);
});

module.exports = app;
