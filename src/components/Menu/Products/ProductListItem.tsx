import React, { useState } from 'react'
import {
    Card,
    CardActions,
    Button,
    CardContent,
    TextField,
} from '@mui/material'
import './ProductListItem.scss'

export type ProductProps = {
    id?: number
    name: string
    description: string
    type: string
    capacity: number
    price: number
    img: string
}

const ProductListItem = ({
    id,
    name,
    description,
    type,
    capacity,
    price,
    img,
}: ProductProps) => {
    const [count, setCount] = useState<number>(1)
    const [color, setColor] = useState<string>('green')

    const onIncrementClick = () =>
        setCount((prevState: number) => prevState + 1)
    const onDecrementClick = () =>
        setCount((prevState: number) => prevState - 1)

    const changeColor = () =>
        setColor((prevState: string) =>
            prevState === 'green' ? 'red' : 'green'
        )

    return (
        <Card>
            <CardContent>
                <div className="product-img">
                    <img src={img} alt="phone" />
                </div>
                <h4 className={`product-title ${color}`}>{name}</h4>
                <div className="product-description">{description}</div>
                <div className="product-features">{type}</div>
                <div className="product-features">{capacity} Gb</div>
                <div className="product-price">{price} $</div>
                <div className="product-quantity">
                    <Button variant="contained" onClick={onDecrementClick}>
                        -
                    </Button>
                    <TextField size="small" value={count} variant="outlined" />
                    <Button variant="contained" onClick={onIncrementClick}>
                        +
                    </Button>
                </div>
                <p>Color: {color}</p>
                <button onClick={changeColor}>Change color</button>
            </CardContent>

            <CardActions className="btn-wrap">
                <Button variant="contained">Add to cart</Button>
            </CardActions>
        </Card>
    )
}

export default ProductListItem
