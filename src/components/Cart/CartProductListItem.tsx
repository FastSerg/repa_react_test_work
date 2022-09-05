import React from 'react'
import { Product } from 'components/Menu/Products/productsArray'
type Props = {
    productCount: number
    product: Product
}

const CartProductListItem = ({ product, productCount }: Props) => {
    return (
        <>
            {product.name}:{productCount}
        </>
    )
}

export default CartProductListItem
