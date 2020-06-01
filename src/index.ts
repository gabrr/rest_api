import express from 'express'
import cors from 'cors'

const app = express()

const port = process.env.PORT || 8000


app.use(cors())
app.get("/", (req, res) => {
    res.send("Hello world 2")

})

app.listen(port, () => console.log(`App running on port ${port}`))
