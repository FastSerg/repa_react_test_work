import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Header from 'container/Header/Header'
import Main from 'container/Main/Main'
import { omit } from 'lodash'
import { StyledEngineProvider } from '@mui/material'

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
        setProductsInCart((prevState: ProductsInCartProps) =>
            omit(prevState, [id])
        )
    }

    const incrementClickCartExtend = (id: number) => {
        setProductsInCart((prevState: ProductsInCartProps) => ({
            ...prevState,
            [id]: prevState[id] + 1,
        }))
    }
    const decrementClickCartExtend = (id: number) => {
        setProductsInCart((prevState: ProductsInCartProps) => ({
            ...prevState,
            [id]: prevState[id] - 1,
        }))
    }

    const changeProductQuantity = (id: number, count: number) => {
        setProductsInCart((prevState: ProductsInCartProps) => ({
            ...prevState,
            [id]: count,
        }))
    }

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            <Main
                addProductToCart={addProductToCart}
                productsInCart={productsInCart}
                removeProductFromCart={removeProductFromCart}
                decrementClickCartExtend={decrementClickCartExtend}
                incrementClickCartExtend={incrementClickCartExtend}
                changeProductQuantity={changeProductQuantity}
            />
        </StyledEngineProvider>
    )
}

export default App
