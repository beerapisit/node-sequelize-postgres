const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const post = process.env.PORT || 3000;

const indexRouter = require("./routes/index")

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/v1", indexRouter);
// app.use("/api/v1/user", indexRouter);


app.use((req, res, next)=>{
    console.log("hadle error")
    res.status(404).send({error: "Not found"})
})

// app.use((err, req, res, next)=> {
//     console.log("testtttt error")
//     res.locals.message = err.message
//     res.locals.error= req.app.get("env") === 'development' ? err : {}
//     res.status(err.status || 500).send({error: err})
// })

app.listen(post, ()=>{
    console.log(`Server is runing on http://localhost:${post}`)
})

module.exports = app