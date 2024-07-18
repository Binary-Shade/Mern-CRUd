const express = require('express')
const mongoose = require('mongoose')
const helmet = require('helmet') //helps protect your web application from common security vulnerabilities by setting HTTP headers that enhance security
const cors = require('cors') //for managing cross-origin requests
const PORT = 3001
const userModel = require('./models/UserSchema')

const app = express()
app.use(cors())
app.use(helmet())
app.use(express.json())


async function main(){
    console.log('connecting to database !');
    await mongoose.connect('mongodb://127.0.0.1:27017/Userdb')
    console.log('database connected ->'); 
}

app.post('/Userdb', async (req, res, next)=>{
    const result = await userModel.create(req.body)
    res.send(result)
})

app.get('/',async (req, res) => {
  const result = await userModel.find()
  res.send(result)
});

app.get('/getUser/:id', async (req, res)=>{
    const id = req.params.id
    const result = await userModel.findById(id)
    res.send(result)
})

app.put('/Update/:id', async(req, res)=>{
    try {
        const id = req.params.id
        const result = await userModel.findByIdAndUpdate(id,{
            _id: id,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            age: req.body.age,
            email: req.body.email
        })
        
        if(!result) {
            return res.status(400).json({
                message: 'user not found'
            })
        }

        res.send('updated')    
    }catch(err){
        console.error(err);
        res.status(500).json({
            message: 'internal server error'
        })
    }
})

app.delete('/deleteUser/:id', async(req, res)=>{
    const id = req.params.id
    const result = await userModel.findByIdAndDelete(id)
    res.send(result)
})


main().catch((err)=>console.log(err))

mongoose.set('debug', true)
app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`);
})  