import express from 'express'


const app = express();



app.get('/',(req,res)=>{
    return res.json(process.env.WELCOME_MESSAGE ?`${process.env.WELCOME_MESSAGE}`
    :'Hello from localhost, no Welcome message env var' )
})
const PORT = 4000;

app.listen(PORT ,()=>console.log(`Server is running at port ${PORT}`))