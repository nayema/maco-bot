import Auth0Lock from 'auth0-lock'

const lock = new Auth0Lock(
  process.env.REACT_APP_AUTH0_CLIENT_ID,
  process.env.REACT_APP_AUTH0_DOMAIN,
  {
    auth: {
      redirectUrl: process.env.REACT_APP_REDIRECT_URL,
      responseType: 'token id_token'
    },
    languageDictionary: { title: process.env.REACT_APP_TITLE }
  }
)

export function handleLoginRequest () {
  return new Promise((resolve, reject) => {
    lock.on('authenticated', (authResult) => {
      lock.getUserInfo(
        authResult.accessToken,
        (error, profile) => {
          if (!error) {
            lock.hide()
            localStorage.setItem('profile', profile)
            localStorage.setItem('idToken', authResult.idToken)
            resolve()
          }
        }
      )
    })

    lock.on('unrecoverable_error', (error) => {
      lock.hide()
      reject(error)
    })
  })
}

export function isAuthenticated () {
  return localStorage.getItem('profile') && localStorage.getItem('idToken')
}

export function getProfile () {
  return localStorage.getItem('profile')
}

export function getIdToken () {
  return localStorage.getItem('idToken')
}

export function login () {
  lock.show()
}

export function logout () {
  localStorage.removeItem('profile')
  localStorage.removeItem('idToken')
  lock.logout({ returnTo: process.env.REACT_APP_LOGOUT_URL })
}
