const express = require('express')
const app = express()
const port = 3000

const someObject = {
  "foo": 42,
  "bar": "baz"
}

const manyObjects = [
  {
    id: 1,
  },
  {
    id: 2,
  }
];


function joinObjects(objects) {
  return objects.map((o) => ({
    ...o,
    someObject: calculateSomeObject()
  }))
}

function calculateSomeObject() {
  return someObject
}

app.post('/foo', (req, res) => {
  const response = {
    manyObjects: joinObjects(manyObjects)
  }
  res.json(response)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
