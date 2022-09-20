import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./product/Product";
import image1 from "../../assets/digital-watch.png"
import image2 from "../../assets/oscar-nord-8l9VxXI28tY-unsplash.jpg"

const Products = () => {

    const products = [
        {id: 1, name: "Shoes", description: "Running shoes", price: "500", image: image1 },
        {id: 2, name: "Macbook", description: "Apple macbook", price: "84, 000", image: image2 }
    ]

    return (
        <main>
            <Grid container justifyContent="center" spacing={4} >
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product}  />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products