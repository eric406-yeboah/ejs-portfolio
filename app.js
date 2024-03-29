const express= require('express')
const dotEnv = require('dotenv')
const app = express()
dotEnv.config()

const port =process.env.PORT ||  5000

app.set('view engine','ejs')
app.use(express.static(__dirname + '/public'));

app.get('/',(req,res)=>{
    res.render('index')
})




app.listen(port ,()=>{
    console.log(`server started on http://localhost:${port}`)
})