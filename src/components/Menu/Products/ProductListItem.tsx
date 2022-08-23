import React, { Component } from 'react'
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

type State = {
    count: number
    colorCondition: boolean
    minInterval: number
    maxInterval: number
}

class ProductListItem extends Component<ProductProps, State> {
    state = {
        count: 1,
        colorCondition: true,
        minInterval: 1,
        maxInterval: 10,
    }

    onDecrementClick = () => {
        this.setState((prevState: State) => ({ count: prevState.count - 1 }))
    }

    onIncrementClick = () => {
        this.setState((prevState: State) => ({ count: prevState.count + 1 }))
    }

    changeColor() {
        this.setState((prevState: State) => ({
            colorCondition: !prevState.colorCondition,
        }))
    }

    render() {
        const { name, description, type, capacity, price, img } = this.props
        const { count, colorCondition, minInterval, maxInterval } = this.state
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
                            disabled={count <= minInterval}
                            variant="contained"
                            onClick={this.onDecrementClick}
                        >
                            -
                        </Button>
                        <TextField
                            size="small"
                            value={count}
                            variant="outlined"
                        />
                        <Button
                            disabled={count >= maxInterval}
                            variant="contained"
                            onClick={this.onIncrementClick}
                        >
                            +
                        </Button>
                    </div>
                    <p>Color: {colorCondition ? 'green' : 'red'}</p>
                    <button onClick={this.changeColor.bind(this)}>
                        Change color
                    </button>
                </CardContent>

                <CardActions className="btn-wrap">
                    <Button variant="contained">Add to cart</Button>
                </CardActions>
            </Card>
        )
    }
}

export default ProductListItem
