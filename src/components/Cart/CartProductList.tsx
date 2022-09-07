import React from 'react'
import { keys } from 'lodash'
import productsArray, {
    Product,
    getProductsObject,
} from 'components/Menu/Products/productsArray'
import CartProductListItem from './CartProductListItem'

type Props = {
    productsInCart: { [id: number]: number }
    productsObject?: {
        [id: number]: Product
    }
    CartItem?: any
    removeProductFromCart?: (id: number) => void
    incrementClickCartExtend?: (id: number) => void
    decrementClickCartExtend?: (id: number) => void
    changeProductQuantity?: (id: number, count: number) => void
}

function CartProductList({
    productsInCart,
    productsObject = getProductsObject(productsArray),
    CartItem = CartProductListItem,
    removeProductFromCart,
    incrementClickCartExtend,
    decrementClickCartExtend,
    changeProductQuantity,
}: Props) {
    return (
        <>
            {keys(productsInCart).map((productId) => (
                <CartItem
                    key={productId}
                    product={productsObject[parseInt(productId)]}
                    productCount={productsInCart[parseInt(productId)]}
                    removeProductFromCart={removeProductFromCart}
                    incrementClickCartExtend={incrementClickCartExtend}
                    decrementClickCartExtend={decrementClickCartExtend}
                    changeProductQuantity={changeProductQuantity}
                />
            ))}
        </>
    )
}

export default CartProductList
