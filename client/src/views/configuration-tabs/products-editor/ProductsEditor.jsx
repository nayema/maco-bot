import React from 'react'
import keyPress from 'react-keypress'
import Input from 'material-ui/Input'
import Button from 'material-ui/Button'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table'
import { LinearProgress, CircularProgress } from 'material-ui/Progress'
import Select from 'material-ui/Select'
import { MenuItem } from 'material-ui/Menu'
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

const AddProductRow = ({ classes, clients, newProduct, productAddingInProgress, addProductStarted, changeNewProduct }) => (
  <TableRow>
    <TableCell>
      <Input
        disabled={productAddingInProgress}
        placeholder="New Product Name"
        onChange={(e) => changeNewProduct('name', e.target.value)}
        value={newProduct['name']}
      />
    </TableCell>
    <TableCell>
      <Select
        onChange={(e) => changeNewProduct('clientId', e.target.value)}
        value={newProduct['clientId']}
      >
        {clients.map(client => <MenuItem key={client.id} value={client.id}>{client.name}</MenuItem>)}
      </Select>
    </TableCell>
    <TableCell className={classes.actionCell}>
      <div className={classes.wrapper}>
        <Button
          disabled={productAddingInProgress}
          color="primary"
          onClick={() => addProductStarted(newProduct)}
        >
          Add
        </Button>
        {productAddingInProgress && <CircularProgress size={25} className={classes.buttonProgress}/>}
      </div>
    </TableCell>
  </TableRow>
)

const LoadingProductsProgress = () => (
  <TableRow>
    <TableCell colSpan={2}>
      <LinearProgress mode="query"/>
    </TableCell>
  </TableRow>
)

const EditableField = ({ isEditing, displayValue, children }) =>
  isEditing ? children : <span>{displayValue}</span>

const ProductRow = ({ classes, clients, product, editProduct, changeEditProduct, cancelEditProduct, updateProductStarted, removeProductStarted }) => (
  <TableRow>
    <TableCell>
      <EditableField isEditing={product.isEditing} displayValue={product.name}>
        <Input
          onChange={(e) => changeEditProduct(product.id, 'name', e.target.value)}
          value={product.edit && product.edit['name']}
        />
      </EditableField>
    </TableCell>
    <TableCell>
      <EditableField
        isEditing={product.isEditing}
        displayValue={clients.filter(client => client.id === product.clientId)[0] && clients.filter(client => client.id === product.clientId)[0]['name']}
      >
        <Select
          onChange={(e) => changeEditProduct(product.id, 'clientId', e.target.value)}
          value={product.edit && product.edit['clientId']}
        >
          {clients.map(client => <MenuItem key={client.id} value={client.id}>{client.name}</MenuItem>)}
        </Select>
      </EditableField>
    </TableCell>
    <TableCell className={classes.actionCell}>
      {
        product.isEditing ? <span>
          <Button color="primary" onClick={() => updateProductStarted(product.edit)}>Update</Button>
          <Button onClick={() => cancelEditProduct(product.id)}>Cancel</Button>
        </span> : <span>
          <Button onClick={() => editProduct(product.id)}>Edit</Button>
          <Button color="secondary" onClick={() => removeProductStarted(product.id)}>Remove</Button>
        </span>
      }
    </TableCell>
  </TableRow>
)

const ProductsEditor = ({ classes, clients, newProduct, products, loadingProducts, productAddingInProgress, addProductStarted, changeNewProduct, editProduct, changeEditProduct, cancelEditProduct, updateProductStarted, removeProductStarted }) => (
  <Table className={classes.root}>
    <TableHead>
      <TableRow>
        <TableCell>Name</TableCell>
        <TableCell>Client</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <AddProductRow
        classes={classes}
        clients={clients}
        newProduct={newProduct}
        productAddingInProgress={productAddingInProgress}
        addProductStarted={addProductStarted}
        changeNewProduct={changeNewProduct}
      />
      {loadingProducts && <LoadingProductsProgress loadingProducts={loadingProducts}/>}
      {products.map(product =>
        <ProductRow
          key={product.id}
          classes={classes}
          clients={clients}
          product={product}
          editProduct={editProduct}
          changeEditProduct={changeEditProduct}
          cancelEditProduct={cancelEditProduct}
          updateProductStarted={updateProductStarted}
          removeProductStarted={removeProductStarted}
        />
      )}
    </TableBody>
  </Table>
)

export default withStyles(styles)(ProductsEditor)
