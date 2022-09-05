import React from 'react'
import CartTotal from 'components/Cart/CartTotal'
import CartProductList from 'components/Cart/CartProductList'
import CartProductListItemExtend from 'components/Cart/CartProductListItemExtend'
import { Grid } from '@mui/material'

type Props = {
    productsInCart: { [id: number]: number }

    removeProductFromCart: (id: number) => void
}

const CartPage = ({ productsInCart, removeProductFromCart }: Props) => {
    return (
        <div>
            <Grid container spacing={4}>
                <CartProductList
                    productsInCart={productsInCart}
                    CartItem={CartProductListItemExtend}
                    removeProductFromCart={removeProductFromCart}
                />
            </Grid>

            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}

export default CartPage
