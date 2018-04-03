import { camelizeKeys, decamelizeKeys } from 'humps'

export async function getAll () {
  const response = await fetch('/maco/equipment/', {
    headers: new Headers({ // TODO: Encapsulate getting access token
      'Authorization': `Bearer ${localStorage.getItem('idToken')}`
    })
  })
  return camelizeKeys(await response.json())
}

export async function add (equipment) {
  const response = await fetch('/maco/equipment/', {
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('idToken')}`
    }),
    body: JSON.stringify(decamelizeKeys(equipment)),
    method: 'post'
  })
  return camelizeKeys(await response.json())
}

export async function update (equipment) {
  await fetch('/maco/equipment/', {
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('idToken')}`
    }),
    body: JSON.stringify(decamelizeKeys(equipment)),
    method: 'put'
  })
}

export async function remove (equipment) {
  await fetch('/maco/equipment/', {
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('idToken')}`
    }),
    body: JSON.stringify(decamelizeKeys(equipment)),
    method: 'delete'
  })
}
