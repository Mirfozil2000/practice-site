import express from 'express'
import serverless from 'serverless-http';
const app = express();

app.get('/', (req,res) => {
    res.send('Hush kelibsiz')
})

app.get('/all', (req,res) => {
    res.json({
        name: "Mirfozil",
        hobby: {
            1: "programming",
            2: "reading",
            3: "listening music"
        }
    })
})
export const handler = serverless(app);