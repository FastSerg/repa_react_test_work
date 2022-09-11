import React from 'react'
import { Typography, Grid } from '@mui/material'
import ProductListItem from './ProductListItem'
import productsArray from './productsArray'

type ProductProps = {
    id: number
    name: string
    description: string
    type: string
    capacity: number
    price: number
    img: string
    category?: string
}

type Props = {
    productsLikeState: {
        [id: number]: boolean
    }
    changeLike: (id: number) => void
    addProductToCart: (productCount: number, productPrice: number) => void
}

const ProductList = ({
    addProductToCart,
    productsLikeState,
    changeLike,
}: Props) => {
    return (
        <>
            <Typography variant="h4" textAlign={'center'} margin={3}>
                Product List
            </Typography>

            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={3}
            >
                {productsArray
                    .filter(
                        ({ category }: ProductProps) => category === 'phone'
                    )
                    .map(
                        ({
                            id,
                            name,
                            description,
                            capacity,
                            price,
                            type,
                            img,
                        }: ProductProps) => (
                            <Grid item xs={12} sm={6} md={4} key={id}>
                                <ProductListItem
                                    id={id}
                                    name={name}
                                    description={description}
                                    capacity={capacity}
                                    price={price}
                                    type={type}
                                    img={img}
                                    addProductToCart={addProductToCart}
                                    isLike={productsLikeState[id]}
                                    changeLike={changeLike}
                                />
                            </Grid>
                        )
                    )}
            </Grid>
        </>
    )
}

export default ProductList
