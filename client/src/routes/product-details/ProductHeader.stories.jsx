import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import ProductHeader from './ProductHeader'

storiesOf('Product Header', ProductHeader)
  .add('with a product', () =>
    <ProductHeader
      product={{
        'id': 999,
        'name': 'Some Product'
      }}
      clientName={'Some Client'}
      editProduct={action('edit product')}
      removeProductStarted={action('remove product started')}
    />
  )
  .add('when editing', () =>
    <ProductHeader
      product={{
        'id': 999,
        'name': 'Some Product',
        'isEditing': true
      }}
      clientName={'Some Client'}
      changeEditProduct={action('change edit product')}
      updateProductStarted={action('update product started')}
      productUpdatingInProgress={false}
      cancelEditProduct={action('cancel edit product')}
    />
  )
  .add('when updating', () =>
    <ProductHeader
      product={{
        'id': 999,
        'name': 'Some Product',
        'isEditing': true
      }}
      clientName={'Some Client'}
      changeEditProduct={action('change edit product')}
      updateProductStarted={action('update product started')}
      productUpdatingInProgress={true}
      cancelEditProduct={action('cancel edit product')}
    />
  )
