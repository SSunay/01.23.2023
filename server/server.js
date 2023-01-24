const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const {Schema} = mongoose
dotenv.config();

const notarySchema = new Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    img:{type:String,required:true},
})


const Notarys  = mongoose.model('notary',notarySchema);


app.use(cors())
app.use(bodyParser.json()) 

//// GET ALL DATA 
 app.get('/notary',(req,res)=>{
    Notarys.find({},(err,doc)=>{
        if(!err){
            res.send(doc)
        }else{
            res.status(500).json({message:err})
        }
    })
 })


 /// GET BY ID
 app.get('/notary/:_id',(req,res)=>{
    const {_id}=req.params
    Notarys.findById(_id,(err,doc)=>{
        if(!err){
            if(doc){
                res.send(doc)
            }else{
                res.status(404).json({message:'Not Found!'})
            }
        }else{
            res.status(500).json({message:err})
        }
    })
 })

/// DELETE 

app.delete('/notary/:_id',(req,res)=>{
    const {_id}=req.params;
    Notarys.findByIdAndDelete(_id,(err,doc)=>{
        if(!err){
            res.send(doc)
        }else{
            res.status(500).json({message:err})
        }
    })
})


///POST

app.post('/notary',(req,res)=>{
    let notary = new Notarys({
        title:req.body.title,
        description:req.body.description,
        price:req.body.price,
        img:req.body.img,
    })
    notary.save()
    res.send({message:'success...'})
})






const PORT = process.env;
const DB = process.env.DB_URL.replace("<password>",process.env.PASSWORD)

mongoose.connect(DB,(err)=>{
    if(!err){
        console.log('Db connected')
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))

    }
})