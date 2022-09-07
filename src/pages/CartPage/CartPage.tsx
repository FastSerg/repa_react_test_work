import React from 'react'
import CartTotal from 'components/Cart/CartTotal'
import CartProductList from 'components/Cart/CartProductList'
import CartProductListItemExtend from 'components/Cart/CartProductListItemExtend'
import { Grid } from '@mui/material'

type Props = {
    productsInCart: { [id: number]: number }
    incrementClickCartExtend: (id: number) => void
    removeProductFromCart: (id: number) => void
    decrementClickCartExtend: (id: number) => void
    changeProductQuantity: (id: number, count: number) => void
}

const CartPage = ({
    productsInCart,
    removeProductFromCart,
    incrementClickCartExtend,
    decrementClickCartExtend,
    changeProductQuantity,
}: Props) => {
    return (
        <div style={{ padding: '30px 0' }}>
            <Grid container spacing={4}>
                <CartProductList
                    productsInCart={productsInCart}
                    CartItem={CartProductListItemExtend}
                    removeProductFromCart={removeProductFromCart}
                    incrementClickCartExtend={incrementClickCartExtend}
                    decrementClickCartExtend={decrementClickCartExtend}
                    changeProductQuantity={changeProductQuantity}
                />
            </Grid>

            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}

export default CartPage
