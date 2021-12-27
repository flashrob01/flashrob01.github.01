const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'DDR',
  password: 'pfloyd2717',
  port: 5432,
})
const getUsers = (request, response) => {
  pool.query('SELECT * FROM users ORDER BY user_id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const login = async (req) => {
  const username = req;
  const res = await pool.query('SELECT * FROM customers WHERE username = $1', [username]) 
    return res.rows
  }

  //login is copy and pasted from the \db\index.js file of sunshine\server!

const getUserById = (request, response) => {
  const user_id = parseInt(request.params.user_id)

  pool.query('SELECT * FROM users WHERE user_id = $1', [user_id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createUser = (request, response) => {
  const { user_id, first_name, last_name, email, linked_in, date_of_birth, city, country, identity_confirmed, company } = request.body

  pool.query('INSERT INTO users (user_id, first_name, last_name, email, linked_in, date_of_birth, city, country, identity_confirmed, company) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)', 
  //Rows cannot be split in this language!
  [user_id, first_name, last_name, email, linked_in, date_of_birth, city, country, identity_confirmed, company], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added with ID: ${user_id}`)
  })
}
//This used to say ${result.insert.Id}; I have NO idea where the heck that came from!

const updateUser = (request, response) => {
  const user_id = parseInt(request.params.user_id)
  const {first_name, last_name, email, linked_in, date_of_birth, city, country, identity_confirmed, company} = request.body;

  pool.query(
    'UPDATE users SET first_name = $1, last_name = $2, email = $3, linked_in = $4, date_of_birth=$5, city=$6, country=$7, identity_confirmed=$8, company=$9 WHERE user_id = $10',
    [first_name, last_name, email, linked_in, date_of_birth, city, country, identity_confirmed, company, user_id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified with ID: ${user_id}`)
    }
  )
}

//it would appear that this put command takes in id and then allows you to update name/ email / etc. 
//https://blog.logrocket.com/nodejs-expressjs-postgresql-crud-rest-api-example/comment-page-1/#comments

const deleteUser = (request, response) => {
  const user_id = parseInt(request.params.user_id)

  pool.query('DELETE FROM users WHERE user_id = $1', [user_id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${user_id}`)
  })
}

module.exports = {
  getUsers,
  login,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}
