import React from 'react'
import { Product } from 'components/Menu/Products/productsArray'
import { Grid, CardContent, Card, Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

type Props = {
    productCount: number
    product: Product
    removeProductFromCart: (id: number) => void
}

const CartProductListItemExtend = ({
    productCount,
    product,
    removeProductFromCart,
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
