const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const {userSchema} = require('./datascheme')  

app.post('/api/register', (req, res) => {
    try{
        const {name,email} = req.body
        const {nim, angkatan} = req.body

        const result = userSchema.safeParse(req.body)
s
        return res.status(200).send(result)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

app.get('/', (req, res) => {
    res.status(200).send('<h1>zod scheme validation</h1>')
})

const PORT = 8080
app.listen(PORT, () =>{
    console.log(`Listening to the server ${PORT}`)
})
