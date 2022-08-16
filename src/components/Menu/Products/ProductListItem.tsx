import React from 'react'
import { Card, CardActions, Button, CardContent } from '@mui/material'
import './ProductListItem.css'

type ProductProps = {
    name: string
    description: string
    type: string
    capacity: number
    price: number
}

const ProductListItem = ({
    name,
    description,
    type,
    capacity,
    price,
}: ProductProps) => {
    return (
        <Card>
            <CardContent>
                <h4 className="product-title">{name}</h4>
                <div className="product-description">{description}</div>
                <div className="product-features red">{type}</div>
                <div className="product-features">{capacity} Gb</div>
                <div className="product-prise">{price} $</div>
            </CardContent>

            <CardActions>
                <Button variant="contained">Add to cart</Button>
            </CardActions>
        </Card>
    )
}

export default ProductListItem
