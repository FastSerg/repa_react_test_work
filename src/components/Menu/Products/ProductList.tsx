import React from 'react'
import { Typography, Grid } from '@mui/material'
import ProductListItem from './ProductListItem'

type Props = {}

const ProductList = (props: Props) => {
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
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem
                        name="iPone X"
                        description="This is iPone X"
                        capacity={64}
                        price={500}
                        type="phone"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem
                        name="iPone XII"
                        description="This is iPone XII"
                        capacity={64}
                        price={1500}
                        type="phone"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem
                        name="iPone 7"
                        description="This is iPone X"
                        capacity={32}
                        price={300}
                        type="phone"
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default ProductList
