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
}

function CartProductList({
    productsInCart,
    productsObject = getProductsObject(productsArray),
    CartItem = CartProductListItem,
    removeProductFromCart,
}: Props) {
    return (
        <>
            {keys(productsInCart).map((productId) => (
                <CartItem
                    key={productId}
                    product={productsObject[parseInt(productId)]}
                    nameproductCount={productsInCart[parseInt(productId)]}
                    removeProductFromCart={removeProductFromCart}
                />
            ))}
        </>
    )
}

export default CartProductList
