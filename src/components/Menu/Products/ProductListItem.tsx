import React, { useState } from 'react'
import {
    Card,
    CardActions,
    Button,
    CardContent,
    TextField,
} from '@mui/material'
import './ProductListItem.scss'

type ProductProps = {
    id?: number
    name: string
    description: string
    type: string
    capacity: number
    price: number
    img: string
    addProductToCart: (id: number, count: number) => void
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
                <div className="product-quantity">
                    <Button
                        disabled={count <= 1}
                        variant="contained"
                        onClick={onDecrementClick}
                    >
                        -
                    </Button>
                    <TextField size="small" value={count} variant="outlined" />
                    <Button
                        disabled={count >= 10}
                        variant="contained"
                        onClick={onIncrementClick}
                    >
                        +
                    </Button>
                </div>
            </CardContent>
            <CardActions className="btn-wrap">
                <Button
                    variant="contained"
                    onClick={() => addProductToCart(1, 5)}
                >
                    Add to cart
                </Button>
            </CardActions>
        </Card>
    )
}

export default ProductListItem
