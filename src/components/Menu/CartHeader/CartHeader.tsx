import React from 'react'

type Props = {
    totalPrice: number
    totalCount: number
}

const CartHeader = ({ totalPrice, totalCount }: Props) => {
    return (
        <div>
            <div>{totalCount}</div>
            <div>${totalPrice}</div>
        </div>
    )
}

export default CartHeader
