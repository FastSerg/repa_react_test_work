import React, { useState } from 'react'
import { Card, CardActions, Button, CardContent } from '@mui/material'
import './ProductListItem.scss'
import Quantity from 'components/Quantity/Quantity'

type ProductProps = {
    id: number
    name: string
    description: string
    type: string
    capacity: number
    price: number
    img: string
    addProductToCart: (productCount: number, productPrice: number) => void
}

const ProductListItem = ({
    id,
    name,
    description,
    type,
    capacity,
    price,
    img,
    addProductToCart,
}: ProductProps) => {
    const [count, setCount] = useState<number>(1)

    const onIncrementClick = () =>
        setCount((prevState: number) => prevState + 1)
    const onDecrementClick = () =>
        setCount((prevState: number) => prevState - 1)

    return (
        <Card>
            <CardContent>
                <div className="product-img">
                    <img src={img} alt="phone" />
                </div>
                <h4 className="product-title">{name}</h4>
                <div className="product-description">{description}</div>
                <div className="product-features">{type}</div>
                <div className="product-features">{capacity} Gb</div>
                <div className="product-price">{price} $</div>
                <Quantity
                    onIncrementClick={onIncrementClick}
                    onDecrementClick={onDecrementClick}
                    count={count}
                />
            </CardContent>
            <CardActions className="btn-wrap">
                <Button
                    variant="contained"
                    onClick={() => addProductToCart(id, count)}
                >
                    Add to cart
                </Button>
            </CardActions>
        </Card>
    )
}

export default ProductListItem
