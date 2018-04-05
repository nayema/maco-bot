import React from 'react'
import LinkContainer from 'redux-first-router-link'
import Input from 'material-ui/Input'
import Button from 'material-ui/Button'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table'
import { CircularProgress } from 'material-ui/Progress'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  root: {
    width: 'auto',
    margin: 'auto'
  },
  wrapper: {
    margin: theme.spacing.unit,
    position: 'relative'
  },
  actionCell: {
    textAlign: 'center',
    width: 176
  },
  buttonProgress: {
    position: 'absolute',
    top: '13%',
    left: '44%'
  }
})

const AddProductRow = ({ classes, clientId, newProduct, productAddingInProgress, addProductStarted, changeNewProduct }) => (
  <TableRow>
    <TableCell>
      <Input
        disabled={productAddingInProgress}
        placeholder="New Product Name"
        onChange={(e) => changeNewProduct('name', e.target.value)}
        value={newProduct['name']}
      />
    </TableCell>
    <TableCell className={classes.actionCell}>
      <div className={classes.wrapper}>
        <Button
          disabled={productAddingInProgress}
          color="primary"
          onClick={() => addProductStarted({...newProduct, 'clientId': clientId})}
        >
          Add
        </Button>
        {productAddingInProgress && <CircularProgress size={25} className={classes.buttonProgress}/>}
      </div>
    </TableCell>
  </TableRow>
)

const ProductRow = ({ classes, product, Link }) => (
  <TableRow>
    <TableCell>
      <Link to={`/products/${product['id']}`}>{product['name']}</Link>
    </TableCell>
  </TableRow>
)

const ProductsList = ({ classes, clientId, products, newProduct, productAddingInProgress, addProductStarted, changeNewProduct, Link = LinkContainer }) => (
  <Table className={classes.root}>
    <TableHead>
      <TableRow>
        <TableCell>Name</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <AddProductRow
        classes={classes}
        clientId={clientId}
        newProduct={newProduct}
        productAddingInProgress={productAddingInProgress}
        addProductStarted={addProductStarted}
        changeNewProduct={changeNewProduct}
      />
      {products.map(product =>
        <ProductRow
          key={product.id}
          classes={classes}
          product={product}
          Link={Link}
        />
      )}
    </TableBody>
  </Table>
)

export default withStyles(styles)(ProductsList)
