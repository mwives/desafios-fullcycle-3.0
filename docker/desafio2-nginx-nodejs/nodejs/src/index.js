import express from 'express'
import { createPool } from 'mysql2/promise'

const pool = createPool({
  host: 'mysql',
  user: 'root',
  password: 'root',
  database: 'fullcycle',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
})

const app = express()

const insertPerson = async () => {
  try {
    const insertQuery = 'INSERT INTO people (name) values ("Ivonei")'
    await pool.query(insertQuery)
  } catch (err) {
    console.error('Error inserting people', err)
  }
}

insertPerson()

app.get('/', async (req, res) => {
  try {
    const [results] = await pool.query('SELECT name FROM people')

    res.send(`
      <h1>Full Cycle Rocks!</h1>
      <h2>People:</h2>
      <ul>
        ${results.map((result) => `<li>${result.name}</li>`).join('')}
      </ul>
    `)
  } catch (err) {
    console.error('Error fetching people:', err)
  }
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
