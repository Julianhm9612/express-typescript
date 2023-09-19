import express from 'express'

import diariesRouter from './routes/diaries'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.get('/ping', (_req, res) => {
  console.log('Someone pinged here!!')
  res.send('pong')
})

app.use('/api/diaries', diariesRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
