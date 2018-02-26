import request from 'supertest'

import app from '../../app'
import Client from './Client'

describe('clients', () => {
  beforeEach(async () => {
    await Client.query().delete()
  })

  describe('when getting all clients', () => {
    it('gets', async () => {
      await Client.query().insert({ 'name': 'Some Client' })

      const response = await request(app).get('/clients/')

      expect(response.statusCode).toBe(200)
      const clients = response.body
      expect(clients[0]).toHaveProperty('id')
      expect(clients[0]).toEqual(expect.objectContaining({
        'name': 'Some Client'
      }))
    })
  })

  describe('when adding a new client', () => {
    it('adds', async () => {
      const client = { 'name': 'Some Client' }

      const response = await request(app)
        .post(/clients/)
        .set('Content-Type', 'application/json')
        .send(client)

      expect(response.statusCode).toBe(200)
      const clientsResponse = response.body
      expect(clientsResponse).toHaveProperty('id')
      expect(clientsResponse).toEqual(expect.objectContaining({
        'name': 'Some Client'
      }))
    })
  })
})
