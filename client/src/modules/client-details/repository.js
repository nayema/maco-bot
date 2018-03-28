import { camelizeKeys, decamelizeKeys } from 'humps'

export async function getClient (client) {
  const response = await fetch(`/maco/clients/${client['id']}`, {
    headers: new Headers({
      'Authorization': `Bearer ${localStorage.getItem('idToken')}`
    })
  })
  return camelizeKeys(await response.json())
}

export async function getProducts () {
  const response = await fetch('/maco/products/', {
    headers: new Headers({ // TODO: Encapsulate getting access token
      'Authorization': `Bearer ${localStorage.getItem('idToken')}`
    })
  })
  return camelizeKeys(await response.json())
}

export async function update (client) {
  await fetch('/maco/clients/', {
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('idToken')}`
    }),
    body: JSON.stringify(decamelizeKeys(client)),
    method: 'put'
  })
}

export async function remove (client) {
  await fetch('/maco/clients/', {
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('idToken')}`
    }),
    body: JSON.stringify(decamelizeKeys(client)),
    method: 'delete'
  })
}

export async function add (product) {
  const response = await fetch('/maco/products/', {
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('idToken')}`
    }),
    body: JSON.stringify(decamelizeKeys(product)),
    method: 'post'
  })
  return camelizeKeys(await response.json())
}
