const express = require('express')
const mongoose = require('mongoose')
const helmet = require('helmet') //helps protect your web application from common security vulnerabilities by setting HTTP headers that enhance security
const cors = require('cors') //for managing cross-origin requests
const PORT = 3001
const userModel = require('./models/UserSchema')
const dotenv = require('dotenv')

const app = express()
app.use(helmet())
app.use(express.json())
dotenv.config()

const corsOptions = {
    origin: 'https://mern-crud-frontend-six.vercel.app', // Replace with your front-end URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Specify allowed HTTP methods
    credentials: true, // Include credentials (like cookies) in the requests
    optionsSuccessStatus: 204 // For legacy browsers
};
app.use(cors(corsOptions))

async function main(){
    console.log('connecting to database !');
    await mongoose.connect('mongodb+srv://02042003sureshk:p2ADGwpSFIFbeRxg@crud.py4bcac.mongodb.net/?retryWrites=true&w=majority&appName=crud')
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

app.put('/updateCan/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const { total } = req.body;

        if (typeof total !== 'number') {
            return res.status(400).json({ error: 'Invalid total amount' });
        }

        const result = await userModel.findByIdAndUpdate(id, { total }, { new: true });

        if (!result) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.status(200).json({ message: 'Total updated successfully', user: result });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while updating the total amount' });
    }
});
app.put('/Update/:id', async(req, res)=>{
    try {
        const id = req.params.id
        const result = await userModel.findByIdAndUpdate(id,{
            _id: id,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            cans: req.body.cans,
            total: req.body.total
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
