var express = require("express")
var router = express.Router()
var authenticationRouter = require("./authentication")

//localhost:4000/routes/v1/authentication
router.use("/authentication", authenticationRouter)

//localhost:4000/routes/v1
router.get("/", (req, res) => {
    res.json({message: "We are in /routes/v1"})
})

module.exports = router