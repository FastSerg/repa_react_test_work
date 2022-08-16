import { Container } from '@mui/system'
import React from 'react'
import ProductList from 'components/Menu/Products/ProductList'
type Props = {}

const Main = (props: Props) => {
    return (
        <>
            <Container>
                <ProductList />
            </Container>
        </>
    )
}

export default Main
