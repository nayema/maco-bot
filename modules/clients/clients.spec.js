import request from 'supertest'

import app from '../../app'
import Client from './Client'

describe('clients', () => {
  beforeEach(async () => {
    await Client.query().delete()
  })

  it('gets all the clients', async () => {
    await Client.query().insert({ 'name': 'Some Client' })

    const response = await request(app).get('/clients/')

    expect(response.statusCode).toBe(200)
    const clients = response.body
    expect(clients[0]).toHaveProperty('id')
    expect(clients[0]).toEqual(expect.objectContaining({ 'name': 'Some Client' }))
  })
})
