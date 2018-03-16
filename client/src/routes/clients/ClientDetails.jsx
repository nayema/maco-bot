import React from 'react'

const ClientDetails = ({ client, loadingClientDetails }) =>
  <div>
    <h1>Client</h1>
    {client && <h2>Name: {client['name']}</h2>}
  </div>

export default ClientDetails
