import React from 'react'
import productsArray, {
    Product,
    getProductsObject,
} from 'components/Menu/Products/productsArray'
import CartTotal from 'components/Cart/CartTotal'
import CartProductList from 'components/Cart/CartProductList'
import CartProductListItemExtend from 'components/Cart/CartProductListItemExtend'
import { Grid } from '@mui/material'

type Props = {
    productsInCart: { [id: number]: number }
    productsObject?: {
        [id: number]: Product
    }
}

const CartPage = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
}: Props) => {
    return (
        <div>
            <Grid container spacing={4}>
                <CartProductList
                    productsInCart={productsInCart}
                    CartItem={CartProductListItemExtend}
                />
            </Grid>

            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}

export default CartPage
