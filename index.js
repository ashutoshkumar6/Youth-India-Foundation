const express=require('express')
const path=require('path')
const bodyParser=require('body-parser')
const main=require('./routes/main')
const app=express()


const port=3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const public=path.join(__dirname,'public')
const views=path.join(__dirname,'views')


app.set('view engine','ejs') 
app.set('views',views)
app.use(express.static(public))

app.use(main)


app.listen(port,()=>{  
    console.log(`Server is up at ${port}`)
}) 
