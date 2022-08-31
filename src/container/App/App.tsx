import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Header from 'container/Header/Header'
import Main from 'container/Main/Main'

export type ProductsInCartProps = {
    [id: number]: number
}

const App = () => {
    const [productsInCart, setProductsInCart] = useState<ProductsInCartProps>({
        1: 1,
        2: 1,
    })

    const addProductToCart = (id: number, count: number) => {
        setProductsInCart((prevState: ProductsInCartProps) => ({
            [id]: prevState[id] + count,
        }))
    }

    return (
        <>
            <CssBaseline />
            <button onClick={() => addProductToCart(2, 5)}>Add to Cart</button>
            <Header productsInCart={productsInCart} />
            <Main addProductToCart={addProductToCart} />
        </>
    )
}

export default App
