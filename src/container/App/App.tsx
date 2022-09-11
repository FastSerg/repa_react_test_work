import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Header from 'container/Header/Header'
import Main from 'container/Main/Main'
import { omit } from 'lodash'
import { StyledEngineProvider } from '@mui/material'

export type ProductsInCartProps = {
    [id: number]: number
}

type ProductsLikeStateProps = {
    [id: number]: boolean
}

const App = () => {
    const [productsInCart, setProductsInCart] = useState<ProductsInCartProps>({
        1: 1,
    })

    const [productsLikeState, setProductsLikeState] =
        useState<ProductsLikeStateProps>({
            1: false,
            2: false,
        })

    const changeLike = (id: number) => {
        setProductsLikeState((prevState: ProductsLikeStateProps) => ({
            // ...prevState,
            [id]: prevState[id] !== (true || false) ? true : false,
            // [id]: prevState[id] === false,
        }))
    }

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
                productsLikeState={productsLikeState}
                changeLike={changeLike}
            />
        </StyledEngineProvider>
    )
}

export default App
