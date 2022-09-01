import { Container } from '@mui/system'
import React from 'react'
import ProductList from 'components/Menu/Products/ProductList'
import { Routes, Route } from 'react-router-dom'
import CartPage from 'pages/CartPage/CartPage'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    addProductToCart: (productCount: number, productPrice: number) => void
}

const Main = ({ addProductToCart, productsInCart }: Props) => {
    return (
        <>
            <Container>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <ProductList addProductToCart={addProductToCart} />
                        }
                    />
                    <Route
                        path="cart"
                        element={<CartPage productsInCart={productsInCart} />}
                    />
                </Routes>
            </Container>
        </>
    )
}

export default Main
