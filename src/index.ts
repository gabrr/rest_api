import express from 'express'
import cors from 'cors'

const app = express()

const port = process.env.PORT || 8000


const users = [
    {
        name: "Gabriel Oliveira",
        age: 23,
    },
    {
        name: "Gabriel Peter",
        age: 24,
    },
    {
        name: "Gabriel Jhon",
        age: 23,
    },
    {
        name: "Gabriel Houston",
        age: 27,
    }
]

app.use(cors())
app.get("/", (req, res) => {
    res.json(users)

})

app.listen(port, () => console.log(`App running on port ${port}`))
