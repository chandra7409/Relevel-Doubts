var express = require("express")
var router = express.Router()
var v1Router = require("./v1")

//localhost:4000/routes/v1
router.use("/v1", v1Router)

//localhost:4000/routes
router.get("/", (req, res) => {
    res.json({message: "We are in /routes"})
})

module.exports = router