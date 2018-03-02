import * as actionCreators from './action-creators'
import reducer from './reducer'

require('jest-localstorage-mock')

describe('reducer', () => {
  it('returns the initial state if not provided with a state', () => {
    const initialAction = { type: 'XXXXX' }

    const nextState = reducer(undefined, initialAction)

    expect(nextState).toEqual({
      isAuthenticated: false,
      isAuthenticating: false,
      profile: null,
      idToken: null,
      error: null
    })
  })
})

describe('when handling logging in', () => {
  it('starts logging in', () => {
    const loginRequestStartedAction = actionCreators.loginRequestStarted()

    const nextState = reducer(undefined, loginRequestStartedAction)

    expect(nextState).toEqual(expect.objectContaining({
      isAuthenticated: false,
      isAuthenticating: true
    }))
  })

  it('succeeds logging in', () => {
    const profile = { fakeProfile: 'fakeValue' }
    const idToken = 'some id token'
    const loginRequestSucceededAction = actionCreators.loginRequestSucceeded(profile, idToken)

    const nextState = reducer(undefined, loginRequestSucceededAction)

    expect(nextState).toEqual(expect.objectContaining({
      isAuthenticated: true,
      isAuthenticating: false,
      profile: { fakeProfile: 'fakeValue' },
      idToken: 'some id token'
    }))
  })
})

describe('when handling login errors', () => {
  it('sets error message', () => {
    const error = 'fake error'
    const loginRequestErrored = actionCreators.loginRequestErrored(error)

    const nextState = reducer(undefined, loginRequestErrored)

    expect(nextState).toEqual(expect.objectContaining({
      isAuthenticated: false,
      isAuthenticating: false,
      error: 'fake error'
    }))
  })
})

describe('when handling page refresh', () => {
  it('remains authenticated', () => {
    const profile = { fakeProfile: 'fakeValue' }
    const idToken = 'some id token'
    const alreadyAuthenticatedAction = actionCreators.alreadyAuthenticated(profile, idToken)

    const nextState = reducer(undefined, alreadyAuthenticatedAction)

    expect(nextState).toEqual(expect.objectContaining({
      isAuthenticated: true,
      profile: { fakeProfile: 'fakeValue' },
      idToken: 'some id token'
    }))
  })
})

describe('when handling logging out', () => {
  it('succeeds logging out', () => {
    const logoutRequestSucceededAction = actionCreators.logoutRequestSucceeded()

    const nextState = reducer(undefined, logoutRequestSucceededAction)

    expect(nextState).toEqual(expect.objectContaining({
      isAuthenticated: false,
      profile: null,
      idToken: null
    }))
  })
})
