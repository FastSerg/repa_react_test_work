import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Header from 'container/Header/Header'
import Main from 'container/Main/Main'

export type CartDataProps = {
    totalPrice: number
    totalCount: number
}

const App = () => {
    const [cartData, setCartData] = useState<CartDataProps>({
        totalCount: 10,
        totalPrice: 1110,
    })

    const addProductToCart = () =>
        setCartData((prevState: CartDataProps) => ({
            ...prevState,
            totalCount: prevState.totalCount + cartData.totalCount,
            totalPrice: prevState.totalCount + cartData.totalPrice,
        }))

    return (
        <>
            <CssBaseline />
            <Header cartData={cartData} />
            <Main addProductToCart={() => addProductToCart()} />
        </>
    )
}

export default App
