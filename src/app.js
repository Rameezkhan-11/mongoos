const mongo =require("mongoose");
const validat = require("validator")
const { default: validator } = require("validator");
// connection and creating new db


mongo.connect("mongodb://localhost:27017/play",{ useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex: true } ).then(()=>{console.log("Success")}).catch((err)=>{console.log(err);})

const playSchema = new mongo.Schema({
    name: String,
    email: {
        type:String,
        required: true,
        unique: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email error")
            }
        }
    
    },
    age: Number,
    qul: String,
    pass: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
})
const Play = new mongo.model("Play",playSchema)
const createDocu = async ()=>{
    try{
    const docu = new Play({
        name: "Awais",
        email: "rameezkhan@gmail.com",
        age: 26,
        qul: "matric",
        pass: true
      
    
    
    }) 
    // const docu1 = new Play({
    //     name: "Aasda",
    //     email: "rasrara",
        
    //     age: 26,

    //     qul: "matric",
    //     pass: true
      
    
    
    // }) 

    // const docu2 = new Play({
    //     name: "asda",
    //     email: "rasrara",
        
    //     age: 26,
    //     qul: "matric",
    //     pass: true
      
    
    
    // }) 






    const result = await Play.insertMany([docu]);
    console.log(result)

    
}catch(err){
console.log(err)
}
}

createDocu();
// const doccument = async()=>{
//     const result = await Play.find();
//     console.log(result)
// }
// doccument();
// const deleteDocument = async(_id)=>{

