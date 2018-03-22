import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import ProductsList from './ProductsList'

const Link = ({ children }) => <a>{children}</a>

storiesOf('Products List', ProductsList)
  .add('with no products', () =>
    <ProductsList
      newProduct={{ 'name': '' }}
      products={[]}
    />
  )
  .add('with loading all products', () =>
    <ProductsList
      newProduct={{ 'name': '' }}
      products={[{
        'id': 999,
        'name': 'Some Product'
      }]}
      loadingProducts={true}
      addProductStarted={action('add product started')}
      changeNewProduct={action('change new product')}
      Link={Link}
    />
  )
  .add('with adding a new product', () =>
    <ProductsList
      newProduct={{
        'id': 777,
        'name': 'Some New Product'
      }}
      products={[{
        'id': 999,
        'name': 'Some Product'
      }]}
      productAddingInProgress={true}
      addProductStarted={action('add product started')}
      changeNewProduct={action('change new product')}
      Link={Link}
    />
  )
