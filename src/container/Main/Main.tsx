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
    removeProductFromCart: (id: number) => void
}

const Main = ({
    addProductToCart,
    productsInCart,
    removeProductFromCart,
}: Props) => {
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
                        element={
                            <CartPage
                                productsInCart={productsInCart}
                                removeProductFromCart={removeProductFromCart}
                            />
                        }
                    />
                </Routes>
            </Container>
        </>
    )
}

export default Main
