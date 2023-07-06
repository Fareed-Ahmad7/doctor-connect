import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'

import cors from 'cors'


//Routes
// import authRoutes from './routes/authRoutes.js'


const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json())


//Routes
// app.use('/auth',authRoutes);
// app.use('/question',questionRoutes);

app.get('/',(req, res)=>{
    res.send('hello from SkillShow entry point')
})


app.listen(process.env.PORT || 4000,()=>{
    console.log('server started...')
    // connectDB();
})