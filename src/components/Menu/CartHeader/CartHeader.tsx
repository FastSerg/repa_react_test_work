import React from 'react'
import { keys } from 'lodash'

type Props = {
    productsInCart: { [id: number]: number }
}

const CartHeader = ({ productsInCart }: Props) => {
    return (
        <div>
            {keys(productsInCart).map((productId) => (
                <div key={productId}>
                    {/*@ts-ignore*/}
                    {productId}: {productsInCart[productId]}
                </div>
            ))}
        </div>
    )
}

export default CartHeader
