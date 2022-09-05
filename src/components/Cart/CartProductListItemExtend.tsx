import React from 'react'
import { Product } from 'components/Menu/Products/productsArray'
import { Grid, CardContent, Card } from '@mui/material'

type Props = {
    productCount: number
    product: Product
}

const CartProductListItemExtend = ({ productCount, product }: Props) => {
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
                </CardContent>
            </Card>
        </Grid>
    )
}

export default CartProductListItemExtend