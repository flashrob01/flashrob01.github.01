const express = require('express');
const sellOffersRouter = express.Router();

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'DDR',
  password: 'pfloyd2717',
  port: 5432,
})

sellOffersRouter.get('/', (request, response) => {
  pool.query('SELECT * FROM sell_offers ORDER BY sell_offer_id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
});

sellOffersRouter.get('/:sell_offer_id', (request, response) => {
  const sell_offer_id = parseInt(request.params.sell_offer_id)

  pool.query('SELECT * FROM sell_offers WHERE sell_offer_id = $1', [sell_offer_id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
});

sellOffersRouter.post('/', (request, response) => {
  const { industry, offer_type, offer_details, price, qualifications, sell_offer_id, user_id } = request.body

  pool.query('INSERT INTO sell_offers (industry, offer_type, offer_details, price, qualifications, sell_offer_id, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7)', 
  //Rows cannot be split in this language!
  [industry, offer_type, offer_details, price, qualifications, sell_offer_id, user_id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`New sell offer added with ID: ${sell_offer_id}`)
  })
})

sellOffersRouter.put('/:sell_offer_id', (request, response) => {
  const sell_offer_id = parseInt(request.params.sell_offer_id)
  const {industry, offer_type, offer_details, price, qualifications, user_id} = request.body;

  pool.query(
    'UPDATE users SET industry=$1, offer_type=$2, offer_details=$3, price=$4, qualifications=$5, user_id=$6 WHERE sell_offer_id=$7',
    [industry, offer_type, offer_details, price, qualifications, user_id, sell_offer_id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Sell offer modified with ID: ${sell_offer_id}`)
    }
  )
})

//it would appear that this put command takes in id and then allows you to update name/ email / etc. 
//https://blog.logrocket.com/nodejs-expressjs-postgresql-crud-rest-api-example/comment-page-1/#comments

sellOffersRouter.delete('/:sell_offer_id', (request, response) => {
  const sell_offer_id = parseInt(request.params.sell_offer_id)

  pool.query('DELETE FROM sell_offers WHERE sell_offer_id = $1', [sell_offer_id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${sell_offer_id}`)
  })
})

module.exports = 
  sellOffersRouter;
