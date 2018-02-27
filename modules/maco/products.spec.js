import request from 'supertest'

import app from '../../app'
import Client from './Client'
import Product from './Product'

describe('products', () => {
  let client

  beforeEach(async () => {
    await Product.raw('TRUNCATE products, clients')
    client = await Client.query().insert({ 'name': 'XXXXX' })
  })

  describe('when getting all products', () => {
    it('gets', async () => {
      await Product.query().insert({ 'name': 'Some Product', 'client_id': client.id })

      const response = await request(app).get('/products/')

      expect(response.statusCode).toBe(200)
      const products = response.body
      expect(products[0]).toHaveProperty('id')
      expect(products[0]).toEqual(expect.objectContaining({
        'name': 'Some Product', 'client_id': client.id
      }))
    })
  })

  describe('when adding a new product', () => {
    it('adds', async () => {
      const product = { 'name': 'Some Product', 'client_id': client.id }

      const response = await request(app)
        .post('/products/')
        .set('Content-Type', 'application/json')
        .send(product)

      expect(response.statusCode).toBe(200)
      const products = await Product.query()
      expect(products[0]).toHaveProperty('id')
      expect(products[0]).toEqual(expect.objectContaining({
        'name': 'Some Product', 'client_id': client.id
      }))
    })
  })

  describe('when removing a product', () => {
    it('removes', async () => {
      await Product.query().insert({
        'id': 999,
        'name': 'Some Product',
        'client_id': client.id
      })
      const product = { 'id': 999 }

      const response = await request(app)
        .delete('/products/')
        .set('Content-Type', 'application/json')
        .send(product)

      expect(response.statusCode).toBe(200)
      const products = await Product.query().count()
      expect(products[0]['count']).toEqual('0')
    })
  })
})
