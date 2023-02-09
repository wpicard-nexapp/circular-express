const express = require('express')
const app = express()
const port = 3000

const someObject = {
  "foo": 42,
  "bar": "baz"
}


function gimmeSome() {
  return someObject;
}


app.post('/foo', (req, res) => {
  const response = {
    manyObjects: [
      {
        id: 1,
        someObject: gimmeSome(),
      },
      {
        id: 2,
        someObject: gimmeSome()
      }
    ]
  }

  res.json(response)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
