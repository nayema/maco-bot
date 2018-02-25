const jwt = require('jsonwebtoken')
const pem2jwk = require('pem-jwk').pem2jwk
const keypair = require('keypair')
const nock = require('nock')

const pair = keypair()

const publicJWK = pem2jwk(pair.public)
publicJWK.use = 'sig'
publicJWK.kid = 'kid'

nock(process.env.JWKS_URI)
  .get('')
  .reply(200, {
    keys: [publicJWK]
  })

const token = jwt.sign({ sub: 'test-user' }, pair.private, {
  algorithm: 'RS256',
  header: { kid: 'kid' },
  audience: process.env.AUTH0_AUDIENCE,
  issuer: process.env.AUTH0_ISSUER
})

export default token
