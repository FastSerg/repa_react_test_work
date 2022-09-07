import React from 'react'
import { Product } from 'components/Menu/Products/productsArray'
import { Grid, CardContent, Card, Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import Quantity from 'components/Quantity/Quantity'

type Props = {
    productCount: number
    product: Product
    removeProductFromCart: (id: number) => void
    count: number
    incrementClickCartExtend: (id: number) => void
    decrementClickCartExtend: (id: number) => void
    changeProductQuantity: (id: number, count: number) => void
}

const CartProductListItemExtend = ({
    productCount,
    product,
    count,
    incrementClickCartExtend,
    decrementClickCartExtend,
    removeProductFromCart,
    changeProductQuantity,
}: Props) => {
    return (
        <Grid item xs={12} sm={6}>
            <Card>
                <CardContent>
                    <div style={{ textAlign: 'center' }}>
                        <img
                            src={product.img}
                            alt=""
                            style={{ width: '150px', height: 'auto' }}
                        />
                    </div>
                    <div>{product.name}</div>
                    <p>Price for one item: {product.price}</p>
                    <p>Count: {productCount}</p>
                    <Quantity
                        onIncrementClick={() =>
                            changeProductQuantity(product.id, productCount + 1)
                        }
                        onDecrementClick={() =>
                            productCount === 1
                                ? removeProductFromCart(product.id)
                                : changeProductQuantity(
                                      product.id,
                                      productCount - 1
                                  )
                        }
                        count={productCount}
                        minCount={0}
                    />
                    <Button
                        variant="outlined"
                        onClick={() => removeProductFromCart(product.id)}
                    >
                        <DeleteIcon />
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default CartProductListItemExtend
