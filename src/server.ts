import fastify from 'fastify'
import { knex } from './database'
import { env } from './env'

const app = fastify()

app.get('/hello', async () => {
  const transaction = await knex('transactions')
  return transaction
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('Server listening on http://localhost:3333')
  })
