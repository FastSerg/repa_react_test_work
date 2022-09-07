import { Container } from '@mui/system'
import React from 'react'
import ProductList from 'components/Menu/Products/ProductList'
import { Routes, Route } from 'react-router-dom'
import CartPage from 'pages/CartPage/CartPage'
import Reviews from 'components/Reviews/Reviews'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    addProductToCart: (productCount: number, productPrice: number) => void
    removeProductFromCart: (id: number) => void
    incrementClickCartExtend: (id: number) => void
    decrementClickCartExtend: (id: number) => void
    changeProductQuantity: (id: number, count: number) => void
}

const Main = ({
    addProductToCart,
    productsInCart,
    incrementClickCartExtend,
    decrementClickCartExtend,
    removeProductFromCart,
    changeProductQuantity,
}: Props) => {
    return (
        <>
            <Container>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <ProductList
                                    addProductToCart={addProductToCart}
                                />
                                <Reviews />
                            </>
                        }
                    />
                    <Route
                        path="cart"
                        element={
                            <CartPage
                                productsInCart={productsInCart}
                                incrementClickCartExtend={
                                    incrementClickCartExtend
                                }
                                decrementClickCartExtend={
                                    decrementClickCartExtend
                                }
                                removeProductFromCart={removeProductFromCart}
                                changeProductQuantity={changeProductQuantity}
                            />
                        }
                    />
                </Routes>
            </Container>
        </>
    )
}

export default Main
