import React from 'react'
import { Card, CardActions, Button, CardContent } from '@mui/material'
import classes from './ProductListItem.module.scss'
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
            </CardContent>

            <CardActions className="btn-wrap">
                <Button variant="contained">Add to cart</Button>
            </CardActions>
        </Card>
    )
}

export default ProductListItem
