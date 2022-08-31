import { Container } from '@mui/system'
import React from 'react'
import ProductList from 'components/Menu/Products/ProductList'

type Props = {
    addProductToCart: (id: number, count: number) => void
}

const Main = ({ addProductToCart }: Props) => {
    return (
        <>
            <Container>
                <ProductList addProductToCart={addProductToCart} />
            </Container>
        </>
    )
}

export default Main
