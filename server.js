const express= require('express')
const connectDB = require('./config/connectDB')

require("dotenv").config({path: './config/.env'})
const app =express()
connectDB()
const PORT = process.env.PORT;
app.listen(PORT,()=>{
      console.log(`Server running on the port ${PORT}!`)
})
const UserDB = require('./models/User')


// Get All Usersn
app.get('/users', (req, res) => {
    UserDB.find()
    .then(users => res.status(200).send(users))
    .catch(error => res.status(400).send({error}))
}) 

// Get User by id
app.get('/users/:id', (req, res) => {
    UserDB.find({_id: req.params.id})
    .then(users => res.status(200).send(users))
    .catch(error => res.status(400).send({error}))
}) 

// Add new user to DB
app.post('/users', (req, res) => {
    const User = new UserDB({name: req.body.name, age: req.body.age})
    User.save()
    .then(() => res.status(200).send({ message : 'User added'}))
    .catch(error => res.status(400).send({error}))
})

// Edit user by id
app.put('/users/:id', (req, res) => {
    UserDB.findOneAndUpdate({ _id: req.params.id}, { $set: {...req.body}} )
    .then(() => res.status(200).send({ message : 'User modified'}))
    .catch(error => res.status(400).send({error}))

})

// Remove user by id
app.delete('/users/:id', (req, res) => {
    UserDB.findOneAndDelete({_id: req.params.id})
    .then(() => res.status(200).send({ message : 'User removed'}))
    .catch(error => res.status(400).send({error}))
})

