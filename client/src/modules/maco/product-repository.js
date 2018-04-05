import { camelizeKeys, decamelizeKeys } from 'humps'

export async function getDetails (product) {
  const response = await fetch(`/maco/products/${product['id']}`, {
    headers: new Headers({
      'Authorization': `Bearer ${localStorage.getItem('idToken')}`
    })
  })
  return camelizeKeys(await response.json())
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

export async function addApi (product, api) {
  const response = await fetch(`/maco/products/${product['id']}/add_api`, {
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('idToken')}`
    }),
    body: JSON.stringify(decamelizeKeys(api)),
    method: 'post'
  })
  return camelizeKeys(await response.json())
}

export async function update (product) {
  await fetch('/maco/products/', {
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('idToken')}`
    }),
    body: JSON.stringify(decamelizeKeys(product)),
    method: 'put'
  })
}

export async function remove (product) {
  await fetch('/maco/products/', {
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('idToken')}`
    }),
    body: JSON.stringify(decamelizeKeys(product)),
    method: 'delete'
  })
}
