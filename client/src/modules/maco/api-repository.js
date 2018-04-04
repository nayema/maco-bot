import { camelizeKeys, decamelizeKeys } from 'humps'

export async function getAll () {
  const response = await fetch('/maco/apis/', {
    headers: new Headers({ // TODO: Encapsulate getting access token
      'Authorization': `Bearer ${localStorage.getItem('idToken')}`
    })
  })
  return camelizeKeys(await response.json())
}

export async function getDetails (api) {
  const response = await fetch(`/maco/apis/${api['id']}`, {
    headers: new Headers({
      'Authorization': `Bearer ${localStorage.getItem('idToken')}`
    })
  })
  return camelizeKeys(await response.json())
}

export async function add (api) {
  const response = await fetch('/maco/apis/', {
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('idToken')}`
    }),
    body: JSON.stringify(decamelizeKeys(api)),
    method: 'post'
  })
  return camelizeKeys(await response.json())
}

export async function update (api) {
  await fetch('/maco/apis/', {
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('idToken')}`
    }),
    body: JSON.stringify(decamelizeKeys(api)),
    method: 'put'
  })
}

export async function remove (api) {
  await fetch('/maco/apis/', {
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('idToken')}`
    }),
    body: JSON.stringify(decamelizeKeys(api)),
    method: 'delete'
  })
}
