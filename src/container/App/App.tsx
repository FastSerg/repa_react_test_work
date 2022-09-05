import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Header from 'container/Header/Header'
import Main from 'container/Main/Main'
import { omit } from 'lodash'

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
            ...prevState,
            // [id]: prevState[id] ? prevState[id] + count : 0,
            [id]: (prevState[id] || 0) + count,
        }))
    }

    const removeProductFromCart = (id: number) => {
        setProductsInCart((prevState: ProductsInCartProps) => {
            let prevProductInCar = { ...prevState }
            delete prevProductInCar[id]
            return prevProductInCar
        })
    }

    return (
        <>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            <button onClick={() => removeProductFromCart(2)}>DELETE</button>
            <Main
                addProductToCart={addProductToCart}
                productsInCart={productsInCart}
            />
        </>
    )
}

export default App
