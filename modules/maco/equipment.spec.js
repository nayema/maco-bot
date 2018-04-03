import request from 'supertest'

import app from '../../app'
import Equipment from './Equipment'
import testJwt from '../common/test-jwt'

describe('equipment', () => {
  beforeEach(async done => {
    await Equipment.raw('START TRANSACTION')
    done()
  })

  afterEach(async done => {
    await Equipment.raw('ROLLBACK')
    done()
  })

  describe('when getting all equipment', () => {
    it('gets', async () => {
      await createEquipment({
        'name': 'Some Equipment',
        'asset_id': 1111,
        'product_contact_surface_area': 11.11,
        'minimum_batch_size': 1.11
      })

      const response = await request(app)
        .get('/maco/equipment/')
        .set('Authorization', 'Bearer ' + testJwt)

      expect(response.statusCode).toBe(200)
      const equipmentList = response.body
      expect(equipmentList[0]).toHaveProperty('id')
      expect(equipmentList[0]).toEqual(expect.objectContaining({
        'name': 'Some Equipment',
        'asset_id': 1111,
        'product_contact_surface_area': 11.11,
        'minimum_batch_size': 1.11
      }))
    })
  })

  describe('when adding a new equipment', () => {
    it('adds', async () => {
      const equipment = {
        'name': 'Some Equipment',
        'asset_id': 1111,
        'product_contact_surface_area': 11.11,
        'minimum_batch_size': 1.11
      }

      const response = await request(app)
        .post('/maco/equipment/')
        .set('Content-Type', 'application/json')
        .set('Authorization', 'Bearer ' + testJwt)
        .send(equipment)

      expect(response.statusCode).toBe(200)
      const equipmentList = await Equipment.query()
      expect(equipmentList[0]).toHaveProperty('id')
      expect(equipmentList[0]).toEqual(expect.objectContaining({
        'name': 'Some Equipment',
        'asset_id': 1111,
        'product_contact_surface_area': 11.11,
        'minimum_batch_size': 1.11
      }))
    })
  })

  describe('when updating an existing equipment', () => {
    it('updates', async () => {
      await createEquipment({ 'id': 999, 'name': 'Some Equipment' })
      const equipment = { 'id': 999, 'name': 'Some Updated Equipment' }

      const response = await request(app)
        .put('/maco/equipment/')
        .set('Content-Type', 'application/json')
        .set('Authorization', 'Bearer ' + testJwt)
        .send(equipment)

      expect(response.statusCode).toBe(200)
      const equipmentList = await Equipment.query().where('id', '=', 999)
      expect(equipmentList[0]).toEqual(expect.objectContaining({
        'name': 'Some Updated Equipment'
      }))
    })
  })

  describe('when removing an equipment', () => {
    it('removes', async () => {
      await createEquipment({ 'id': 999, 'name': 'Some Equipment' })
      const equipment = { 'id': 999 }

      const response = await request(app)
        .delete('/maco/equipment/')
        .set('Content-Type', 'application/json')
        .set('Authorization', 'Bearer ' + testJwt)
        .send(equipment)

      expect(response.statusCode).toBe(200)
      const equipmentList = await Equipment.query().count()
      expect(equipmentList[0]['count']).toEqual('0')
    })
  })

  async function createEquipment (attrs) {
    return await Equipment.query().insert({ 'name': 'XXXXX', ...attrs })
  }
})
