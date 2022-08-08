var express = require("express")
var routes = require("./../../misc/routes")
var router = express.Router()

//localhost:4000/routes/v1/authentication/signup
router.post("/signup", (req, res) => {
    res.json({message: "We are in /routes/v1/authentication/signup"})
})
//localhost:4000/routes/v1/authentication/signin
router.post("/signin", (req, res) => {
    res.json({message: "We are in /routes/v1/authentication/signin"})
})
//localhost:4000/routes/v1/authentication/sendotpforemailverification
router.post("/sendotpforemailverification", (req, res) => {
    res.json({message: "We are in /routes/v1/authentication/sendotpforemailverification"})
})
//localhost:4000/routes/v1/authentication/verifyotpforemailverification
router.post("/verifyotpforemailverification", (req, res) => {
    res.json({message: "We are in /routes/v1/authentication/verifyotpforemailverification"})
})
//localhost:4000/routes/v1/authentication/updatepasswordwithotp
router.post("/updatepasswordwithotp", (req, res) => {
    res.json({message: "We are in /routes/v1/authentication/updatepasswordwithotp"})
})
//localhost:4000/routes/v1/authentication
router.get("/", (req, res) => {
    res.json({message: "We are in /routes/v1/authentication"})
})

module.exports = router