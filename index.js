const express=require('express')
const app=express()
const path=require('path')
const mongoose = require('mongoose');
const port=process.env.PORT || 3000;

mongoose.connect('mongodb+srv://singlagoutam12:8bMbsUOGWw0eXlGo@cluster0.br2oaia.mongodb.net/goutam?retryWrites=true&w=majority&appName=Cluster0');
var clientSchema = new mongoose.Schema({
    name: String,
    emailid: String,
    concern: String
});
const client = mongoose.model('client', clientSchema);
app.use('/static',express.static('static'))
app.use(express.urlencoded())
// app.set('views',path.join(__dirname,'views'))  this is used for template engine 
app.set('view engine', 'pug')
app.set('views',path.join(__dirname,'views'))

app.get('/',(req,res)=>{
    res.send('Server is up and running!');
})
app.get('/message',(req,res)=>{
    res.sendFile(path.join(__dirname+'/views/contact.html'));
})
app.get('/projectslist',(req,res)=>{
    res.sendFile(path.join(__dirname+'/views/projectslist.html'));
})
app.post('/message',(req,res)=>{
    var mydata=new client(req.body)
    var name=req.body.name;
    mydata.save().then(()=>{ 
        res.status(201).render('messagerec.pug',{data: name} );
    }).catch(()=>{
        res.status(400).send('item not saved')
    })
})
function one(){
    console.log("received");
}
app.listen(port,()=>{
    console.log(`server is listening at port :${port}`)
})
