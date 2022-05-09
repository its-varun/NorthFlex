const connectToMongo = require('./database/db');

const express = require('express')
var cors = require('cors')

const app = express()
const port = 5000

connectToMongo();
app.use(cors())



app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/auth', require('./routes/auth'));
app.use('/api/sendquery', require('./routes/sendquery'));
// app.use('/api/friend', require('./routes/friend'));
// app.use('/api/sendmail', require('./routes/sendmail'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})