import React from 'react'
import { Button, TextField } from '@mui/material'

type Props = {
    count: number
    onIncrementClick: () => void
    onDecrementClick: () => void
}

const Quantity = ({ count, onDecrementClick, onIncrementClick }: Props) => {
    return (
        <div className="product-quantity">
            <Button
                disabled={count <= 1}
                variant="contained"
                onClick={() => onDecrementClick()}
            >
                -
            </Button>
            <TextField size="small" value={count} variant="outlined" />
            <Button
                disabled={count >= 10}
                variant="contained"
                onClick={() => onIncrementClick()}
            >
                +
            </Button>
        </div>
    )
}

export default Quantity
