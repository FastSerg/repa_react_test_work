import React from 'react'
import { Button, TextField } from '@mui/material'

type Props = {
    count: number
    onIncrementClick: () => void
    onDecrementClick: () => void
    minCount?: number
}

const Quantity = ({
    count,
    onDecrementClick,
    onIncrementClick,
    minCount = 1,
}: Props) => {
    return (
        <div className="product-quantity">
            <Button
                disabled={count <= minCount}
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
    )
}

export default Quantity
