import request from 'supertest'

import app from '../../app'
import Api from './Api'
import testJwt from '../common/test-jwt'

describe('apis', () => {
  beforeEach(async done => {
    await Api.raw('START TRANSACTION')
    done()
  })

  afterEach(async done => {
    await Api.raw('ROLLBACK')
    done()
  })

  describe('when getting all apis', () => {
    it('gets', async () => {
      await createApi({
        'name': 'Some API',
        'adi': 9.9
      })

      const response = await request(app)
        .get('/maco/apis/')
        .set('Authorization', 'Bearer ' + testJwt)

      expect(response.statusCode).toBe(200)
      const apis = response.body
      expect(apis[0]).toHaveProperty('id')
      expect(apis[0]).toEqual(expect.objectContaining({
        'name': 'Some API',
        'adi': 9.9
      }))
    })
  })

  describe('when getting api details', () => {
    it('gets', async () => {
      await createApi({
        'id': 1,
        'name': 'Some API',
        'adi': 9.9
      })

      const response = await request(app)
        .get('/maco/apis/1')
        .set('Authorization', 'Bearer ' + testJwt)

      expect(response.statusCode).toBe(200)
      const api = response.body
      expect(api).toEqual(expect.objectContaining({
        'id': 1,
        'name': 'Some API',
        'adi': 9.9
      }))
    })
  })

  describe('when adding a new api', () => {
    it('adds', async () => {
      const api = { 'name': 'Some API', 'adi': 9.9 }

      const response = await request(app)
        .post('/maco/apis/')
        .set('Content-Type', 'application/json')
        .set('Authorization', 'Bearer ' + testJwt)
        .send(api)

      expect(response.statusCode).toBe(200)
      const apis = await Api.query()
      expect(apis[0]).toHaveProperty('id')
      expect(apis[0]).toEqual(expect.objectContaining({
        'name': 'Some API',
        'adi': 9.9
      }))
    })
  })

  describe('when updating an existing api', () => {
    it('updates', async () => {
      await createApi({
        'id': 999,
        'name': 'Some API',
        'adi': 9.9
      })
      const api = {
        'id': 999,
        'name': 'Some Updated API'
      }

      const response = await request(app)
        .put('/maco/apis/')
        .set('Content-Type', 'application/json')
        .set('Authorization', 'Bearer ' + testJwt)
        .send(api)

      expect(response.statusCode).toBe(200)
      const apis = await Api.query()
      expect(apis[0]).toEqual(expect.objectContaining({
        'name': 'Some Updated API'
      }))
    })
  })

  describe('when removing a api', () => {
    it('removes', async () => {
      await createApi({
        'id': 999,
        'name': 'Some API',
        'adi': 9.9
      })
      const api = { 'id': 999 }

      const response = await request(app)
        .delete('/maco/apis/')
        .set('Content-Type', 'application/json')
        .set('Authorization', 'Bearer ' + testJwt)
        .send(api)

      expect(response.statusCode).toBe(200)
      const apis = await Api.query().count()
      expect(apis[0]['count']).toEqual('0')
    })
  })

  async function createApi (attrs) {
    return await Api.query().insert({ 'name': 'XXXXX', 'adi': 0.0, ...attrs })
  }
})
