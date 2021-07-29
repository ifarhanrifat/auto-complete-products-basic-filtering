import { Grid, TextField } from "@material-ui/core"
import Papa from "papaparse"
import React from "react"
import Products from "./Products"

function Search() {

    const [products, setProducts] = React.useState([
        {
            title : '',
            gtin : '',
            gender : '',
            price : '',
            sale_price : '',
            image_link : '',
            additional_image_link : ''
        }
    ])
    React.useEffect(() => {
        async function getData() {
        const response = await fetch('/data/products.csv')
        const reader = response.body.getReader()
        const result = await reader.read() // raw array
        const decoder = new TextDecoder('utf-8')
        const csv = decoder.decode(result.value) // the csv text
        const results = Papa.parse(csv, { header: true }) // object with { data, errors, meta }
        const products = results.data // array of objects
        setProducts(products)
        console.log(products)
        }
        getData()
    }, [])

    return <Grid container spacing={2}>
        <Grid item md={12}>
            <TextField fullWidth label="Search" placeholder="Search for product" />
        </Grid>
        <Grid item md={12}>
            <Products products = { products } />
        </Grid>
    </Grid>
}

export default Search