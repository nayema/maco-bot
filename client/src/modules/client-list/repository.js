import { camelizeKeys, decamelizeKeys } from 'humps'

export async function getAll () {
  const response = await fetch('/maco/clients/', {
    headers: new Headers({ // TODO: Encapsulate getting access token
      'Authorization': `Bearer ${localStorage.getItem('idToken')}`
    })
  })
  return camelizeKeys(await response.json())
}

export async function add (client) {
  const response = await fetch('/maco/clients/', {
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('idToken')}`
    }),
    body: JSON.stringify(decamelizeKeys(client)),
    method: 'post'
  })
  return camelizeKeys(await response.json())
}
