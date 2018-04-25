import React from 'react'
import Typography from 'material-ui/Typography'

const ApiHeader = ({ api }) =>
  <div>
    <Typography variant="display3" gutterBottom>{api['name']}</Typography>
    {/*Product: {api.product['name']}*/}
  </div>

export default ApiHeader
