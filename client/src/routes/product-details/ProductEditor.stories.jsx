import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import ProductEditor from './ProductEditor'

storiesOf('Product Editor', ProductEditor)
  .add('with a product', () =>
    <ProductEditor
      product={{
        'id': 999,
        'name': 'Some Product',
        'client': { 'name': 'Some Client' }
      }}
      editProduct={action('edit product')}
      removeProductStarted={action('remove product started')}
    />
  )
  .add('when editing', () =>
    <ProductEditor
      product={{
        'id': 999,
        'name': 'Some Product',
        'isEditing': true,
        'client': { 'name': 'Some Client' }
      }}
      changeEditProduct={action('change edit product')}
      updateProductStarted={action('update product started')}
      productUpdatingInProgress={false}
      cancelEditProduct={action('cancel edit product')}
    />
  )
  .add('when updating', () =>
    <ProductEditor
      product={{
        'id': 999,
        'name': 'Some Product',
        'isEditing': true,
        'client': { 'name': 'Some Client' }
      }}
      changeEditProduct={action('change edit product')}
      updateProductStarted={action('update product started')}
      productUpdatingInProgress={true}
      cancelEditProduct={action('cancel edit product')}
    />
  )
