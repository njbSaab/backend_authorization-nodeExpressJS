const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./authRouter')
const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use("/auth", authRouter)

const start = async () => {
   try{ 
      await mongoose.connect(`mongodb+srv://q1w2e3r4t5y:q1w2e3r4t5y@cluster0.8glonaq.mongodb.net/autorisation?retryWrites=true&w=majority`)
      app.listen(PORT, () => console.log(`seRverRy well ${PORT}`))
   }catch(e){
      console.log(e);
   }
}

start()