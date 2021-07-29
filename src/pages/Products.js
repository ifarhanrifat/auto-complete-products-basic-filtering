import React, { useState, useEffect } from "react"
import { Grid, Typography } from "@material-ui/core"
import MaterialTable from 'material-table';


function Products({products}){
    
    return (
        <Grid> <Typography>Products Will Come here</Typography> 
            <MaterialTable 
                data={products}
                options={{
                    search:false
                }}
                columns={[
                    {
                        field: 'title',
                        title: 'Product Title',
                    },
                    {
                        field: 'gtin',
                        title: 'Gtin',
                    },
                    {
                        field: 'gender',
                        title: 'Gender',
                    },
                    {
                        field: 'price',
                        title: 'Price',
                    },
                    {
                        field: 'sale_price',
                        title: 'Sale Price',
                    },
                    {
                        field: 'image_link',
                        title: 'Image',
                        render: rowData => <img src={rowData.image_link} alt="image" style={{width: 50, borderRadius: '50%'}}/>
                    },
                    {
                        field: 'additional_image_link',
                        title: 'Image Link',
                        render: rowData => <a href={rowData.additional_image_link}>Image link</a>
                    }
                ]}
            />
        </Grid>
    );
}

export default Products