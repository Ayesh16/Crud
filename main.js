const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json({msg:"Hello World!"})
})

//Crud Functionalities

app.get('/movies',()=>{

})

app.post('/movies',()=>{

})

app.put('/movies/:id',()=>{

})

app.delete('/movies/:id',()=>{

})

app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}`)
})