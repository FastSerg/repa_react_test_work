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
            totalCount: cartData.totalCount + 1,
            totalPrice: cartData.totalPrice + cartData.totalCount,
        }))

    return (
        <>
            <CssBaseline />
            <Header cartData={cartData} />
            <button onClick={addProductToCart}>Add cart</button>
            <Main />
        </>
    )
}

export default App
