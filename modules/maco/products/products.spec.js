import request from 'supertest'

import app from '../../../app'
import Client from '../clients/Client'
import Product from './Product'
import testJwt from '../../common/test-jwt'

describe('products', () => {
  beforeEach(async done => {
    await Product.raw('START TRANSACTION')
    done()
  })

  afterEach(async done => {
    await Product.raw('ROLLBACK')
    done()
  })

  describe('when getting all products', () => {
    it('gets', async () => {
      const client = await createClient({ 'name': 'Some Client' })
      await Product.query().insert({
        'name': 'Some Product',
        'client_id': client.id
      })

      const response = await request(app)
        .get('/products/')
        .set('Authorization', 'Bearer ' + testJwt)

      expect(response.statusCode).toBe(200)
      const products = response.body
      expect(products[0]).toHaveProperty('id')
      expect(products[0]).toEqual(expect.objectContaining({
        'name': 'Some Product',
        'client': expect.objectContaining({
          'name': 'Some Client'
        })
      }))
    })
  })

  describe('when adding a new product', () => {
    it('adds', async () => {
      const client = await createClient()
      const product = { 'name': 'Some Product', 'client_id': client.id }

      const response = await request(app)
        .post('/products/')
        .set('Content-Type', 'application/json')
        .set('Authorization', 'Bearer ' + testJwt)
        .send(product)

      expect(response.statusCode).toBe(200)
      const products = await Product.query()
      expect(products[0]).toHaveProperty('id')
      expect(products[0]).toEqual(expect.objectContaining({
        'name': 'Some Product',
        'client_id': client.id
      }))
    })
  })

  describe('when updating an existing product', () => {
    it('updates', async () => {
      const client = await createClient()
      const anotherClient = await createClient({ 'name': 'Another Client' })
      await Product.query().insert({
        'id': 999,
        'name': 'Some Product',
        'client_id': client.id
      })
      const product = {
        'id': 999,
        'name': 'Some Updated Product',
        'client_id': anotherClient.id
      }

      const response = await request(app)
        .put('/products/')
        .set('Content-Type', 'application/json')
        .set('Authorization', 'Bearer ' + testJwt)
        .send(product)

      expect(response.statusCode).toBe(200)
      const products = await Product.query().eager('client')
      expect(products[0]).toEqual(expect.objectContaining({
        'name': 'Some Updated Product',
        'client': expect.objectContaining({
          'name': 'Another Client'
        })
      }))
    })
  })

  describe('when removing a product', () => {
    it('removes', async () => {
      const client = await createClient()
      await Product.query().insert({
        'id': 999,
        'name': 'Some Product',
        'client_id': client.id
      })
      const product = { 'id': 999 }

      const response = await request(app)
        .delete('/products/')
        .set('Content-Type', 'application/json')
        .set('Authorization', 'Bearer ' + testJwt)
        .send(product)

      expect(response.statusCode).toBe(200)
      const products = await Product.query().count()
      expect(products[0]['count']).toEqual('0')
    })
  })

  async function createClient (attrs) {
    return await Client.query().insert({ 'name': 'XXXXX', ...attrs })
  }
})
