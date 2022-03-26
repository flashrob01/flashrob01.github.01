const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
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
  const { id, firstname, localizedfirstname, lastname, localizedlastname, email, profilepicture, user_id} = request.body

  pool.query('INSERT INTO users (id, firstname, localizedfirstname, lastname, localizedlastname, email, profilepicture, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', 
  //Rows cannot be split in this language!
  [id, firstname, localizedfirstname, lastname, localizedlastname, email, profilepicture, user_id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added with ID: ${email}`)
  })
}
//This used to say ${result.insert.Id}; I have NO idea where the heck that came from!

const createUser2 = (request, response) => {
  const { first_name, last_name, email} = request.body

  pool.query('INSERT INTO users (first_name, last_name, email) VALUES ($1, $2, $3)', 
  //Rows cannot be split in this language!
  [first_name, last_name, email], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added with email: ${email}`)
  })
}

const updateUser = (request, response) => {
  const user_id = parseInt(request.params.user_id)
  const {first_name, last_name, email, password,city, country, external_id, external_type} = request.body;

  pool.query(
    'UPDATE users SET first_name = $2, last_name = $3, email = $4, password = $5, city=$6, country=$7, external_id=$8, external_type=$9 WHERE user_id = $1',
    [user_id, first_name, last_name, email, password, city, country, external_id, external_type],
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

const login = async (req) => {
  const user_id = req;
  const res = await pool.query('SELECT * FROM users WHERE user_id = $1', [user_id]) 
    return res.rows
  }



module.exports = {
  getUsers,
  getUserById,
  createUser,
  createUser2,
  updateUser,
  deleteUser,
  login,
}