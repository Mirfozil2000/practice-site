import express from 'express'
import serverless from 'serverless-http';
import path from 'path'
const app = express();

let __dirname = path.resolve()

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

app.get('/about', (req,res) => {
    res.sendFile(path.join(__dirname, '/dist/index.html'));
})
export const handler = serverless(app);