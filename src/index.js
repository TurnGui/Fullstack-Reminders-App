import express from 'express'; // Imports Express.js.
import remindersRoutes from './routes/remindersRoutes.js'; // Imports the reminders routes.

const app = express() // Creates an Express application instance.
const port = process.env.PORT || 3000 // Sets the port to the value of the PORT environment variable or defaults to 3000.

app.use('/reminders', remindersRoutes) // Mounts the reminders routes on the /reminders path.

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) // Starts the server on port 3000 and logs a confirmation message.