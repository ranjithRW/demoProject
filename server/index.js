const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const EmployeeModel = require('./models/employee')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/employee')


app.post("/login", (req, res) => {
    const { email, password } = req.body;
    EmployeeModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Sucess")
                }
                else {
                    res.json("password wrong")
                }
            }
            else {
                res.json("we didn't fin a account")
            }
        })
})

app.post("/register", (req, res) => {
    EmployeeModel.create(req.body)
        .then(employees => res.json(employees))
        .catch(err => res.json(err))

})

app.listen(3001, () => {
    console.error("server is running")
})