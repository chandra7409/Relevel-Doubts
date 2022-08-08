
const express = require("express")
const bodyParser = require("body-parser")
var routesRouter = require("./routes")
/**\
 * 1. npm init -y
 * 2. npm i express body-parser
 */

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.raw())
app.use(bodyParser.urlencoded())

//localhost:4000/routes
app.use("/routes", routesRouter)

//localhost:4000/
app.get("/", (req, res) => {
    res.json({message: "Hello World"})
})

app.listen(process.env.PORT || 4000, () => {
    console.log("Server is listening on port 4000")
})