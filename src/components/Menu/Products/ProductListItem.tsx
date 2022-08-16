import React from 'react'
import { Card, CardActions, Button, CardContent } from '@mui/material'
type Props = {}

const ProductListItem = (props: Props) => {
    return (
        <Card>
            <CardContent>
                <h4 className="product-title">IPone X</h4>
                <div className="product-description">This isIPone X</div>
                <div className="product-features">type: phone</div>
                <div className="product-features">Capacity: 64Gb</div>
                <div className="product-prise">500 $</div>
            </CardContent>

            <CardActions>
                <Button variant="contained">Add to cart</Button>
            </CardActions>
        </Card>
    )
}

export default ProductListItem
