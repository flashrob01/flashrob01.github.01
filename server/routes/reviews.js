const express = require('express');
const reviewsRouter = express.Router();

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'DDR',
  password: 'pfloyd2717',
  port: 5432,
})

reviewsRouter.get('/', (request, response) => {
    pool.query('SELECT * FROM reviews ORDER BY review_id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  });


reviewsRouter.get('/:review_id', (request, response) => {
    const review_id = parseInt(request.params.review_id)
      pool.query('SELECT * FROM reviews WHERE review_id = $1', [review_id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  });
  
 reviewsRouter.post('/', (request, response) => {
    const {review_id, content, date, reviewer_id, rating, user_id } = request.body
  
    pool.query('INSERT INTO reviews (review_id, content, date, reviewer_id, rating, user_id) VALUES ($1, $2, $3, $4, $5, $6)', 
    //Rows cannot be split in this language!
    [review_id, content, date, reviewer_id, rating, user_id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`Review added with ID: ${review_id}`)
    })
  });

  reviewsRouter.put('/:review_id', (request, response) => {
    const review_id = parseInt(request.params.review_id)
    const {content, date, reviewer_id, rating, user_id} = request.body;
  
    pool.query(
      'UPDATE reviews SET content = $1, date = $2, reviewer_id = $3, rating = $4, user_id = $5 WHERE review_id = $6',
      [content, date, reviewer_id, rating, user_id, review_id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`Review modified with ID: ${review_id}`)
      }
    )
  });

  reviewsRouter.delete('/:review_id', (request, response) => {
    const review_id = parseInt(request.params.review_id)
  
    pool.query('DELETE FROM reviews WHERE review_id = $1', [review_id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Review deleted with ID: ${review_id}`)
    })
  });
  
  module.exports = reviewsRouter;