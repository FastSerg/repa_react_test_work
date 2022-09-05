import React from 'react'
import { keys } from 'lodash'
import productsArray, {
    Product,
    getProductsObject,
} from 'components/Menu/Products/productsArray'
import CartTotal from 'components/Cart/CartTotal'

type Props = {
    productsInCart: { [id: number]: number }
    productsObject?: {
        [id: number]: Product
    }
}

const CartHeader = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
}: Props) => {
    return (
        <div>
            {keys(productsInCart).map((productId) => (
                <div key={productId}>
                    {productsObject[parseInt(productId)].name}:{' '}
                    {productsInCart[parseInt(productId)]}
                </div>
            ))}
            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}

export default CartHeader
