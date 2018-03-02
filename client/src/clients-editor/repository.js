import { camelizeKeys, decamelizeKeys } from 'humps'

export async function getAll () {
  const response = await fetch('/clients/')
  return camelizeKeys(await response.json())
}

export async function add (client) {
  const response = await fetch('/clients/', {
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify(decamelizeKeys(client)),
    method: 'post'
  })
  return camelizeKeys(await response.json())
}

export async function update (client) {
  await fetch('/clients/', {
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify(decamelizeKeys(client)),
    method: 'put'
  })
}

export async function remove (client) {
  await fetch('/clients/', {
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify(decamelizeKeys(client)),
    method: 'delete'
  })
}
