import React from 'react'
import { keys } from 'lodash'
import productsArray, {
    Product,
    getProductsObject,
} from 'components/Menu/Products/productsArray'

type Props = {
    productsInCart: { [id: number]: number }
    productsObject?: {
        [id: number]: Product
    }
}

const CartTotal = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
}: Props) => {
    return (
        <>
            <div>
                Total{' '}
                {keys(productsInCart).reduce(
                    (total, productId) =>
                        total +
                        productsObject[parseInt(productId)].price *
                            productsInCart[parseInt(productId)],
                    0
                )}{' '}
                $
            </div>
        </>
    )
}

export default CartTotal
