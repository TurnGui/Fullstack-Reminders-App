import express from 'express'; // Imports Express.js.

const app = express() // Creates an Express application instance.
const port = process.env.PORT || 3000 // Sets the port to the value of the PORT environment variable or defaults to 3000.

app.get('/iceCream', (req, res) => {
  res.send('I love iceCream!')
}) // Defines a route (/) that returns I love iceCream.


app.get('/', (req, res) => {
  res.send('Hello world!')
}) // Defines a route (/) that returns I love iceCream

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) // Starts the server on port 3000 and logs a confirmation message.