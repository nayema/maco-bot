import request from 'supertest'

import app from '../../app'
import Client from './Client'
import Product from './Product'
import testJwt from '../common/test-jwt'

describe('clients', () => {
  beforeEach(async done => {
    await Client.raw('START TRANSACTION')
    done()
  })

  afterEach(async done => {
    await Client.raw('ROLLBACK')
    done()
  })

  describe('when getting all clients', () => {
    it('gets', async () => {
      await createClient({ 'name': 'Some Client' })

      const response = await request(app)
        .get('/maco/clients/')
        .set('Authorization', 'Bearer ' + testJwt)

      expect(response.statusCode).toBe(200)
      const clients = response.body
      expect(clients[0]).toHaveProperty('id')
      expect(clients[0]).toEqual(expect.objectContaining({
        'name': 'Some Client'
      }))
    })
  })

  describe('when getting client details', () => {
    it('gets', async () => {
      const client = await createClient({ 'id': 1, 'name': 'Some Client' })
      await createProduct({
        'name': 'Some Product',
        'client_id': client.id
      })

      const response = await request(app)
        .get('/maco/clients/')
        .set('Authorization', 'Bearer ' + testJwt)

      expect(response.statusCode).toBe(200)
      const clients = response.body
      expect(clients[0]).toHaveProperty('id')
      expect(clients[0].products[0]).toHaveProperty('id')
      expect(clients[0]).toEqual(expect.objectContaining({
        'id': 1,
        'name': 'Some Client',
        'products':  expect.arrayContaining([expect.objectContaining({
          'name': 'Some Product',
          'client_id': 1
        })])
      }))
    })
  })

  describe('when adding a new client', () => {
    it('adds', async () => {
      const client = { 'name': 'Some Client' }

      const response = await request(app)
        .post('/maco/clients/')
        .set('Content-Type', 'application/json')
        .set('Authorization', 'Bearer ' + testJwt)
        .send(client)

      expect(response.statusCode).toBe(200)
      const clients = await Client.query()
      expect(clients[0]).toHaveProperty('id')
      expect(clients[0]).toEqual(expect.objectContaining({
        'name': 'Some Client'
      }))
    })
  })

  describe('when updating an existing client', () => {
    it('updates', async () => {
      await createClient({ 'id': 999, 'name': 'Some Client' })
      const client = { 'id': 999, 'name': 'Some Updated Client' }

      const response = await request(app)
        .put('/maco/clients/')
        .set('Content-Type', 'application/json')
        .set('Authorization', 'Bearer ' + testJwt)
        .send(client)

      expect(response.statusCode).toBe(200)
      const clients = await Client.query().where('id', '=', 999)
      expect(clients[0]).toEqual(expect.objectContaining({
        'name': 'Some Updated Client'
      }))
    })
  })

  describe('when removing a client', () => {
    it('removes', async () => {
      await createClient({ 'id': 999, 'name': 'Some Client' })
      const client = { 'id': 999 }

      const response = await request(app)
        .delete('/maco/clients/')
        .set('Content-Type', 'application/json')
        .set('Authorization', 'Bearer ' + testJwt)
        .send(client)

      expect(response.statusCode).toBe(200)
      const clients = await Client.query().count()
      expect(clients[0]['count']).toEqual('0')
    })
  })

  async function createClient (attrs) {
    return await Client.query().insert({ 'name': 'XXXXX', ...attrs })
  }

  async function createProduct (attrs) {
    return await Product.query().insert({ 'name': 'XXXXX', 'client_id': null, ...attrs })
  }
})
