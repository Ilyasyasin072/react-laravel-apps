import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Container, CssBaseline, Button, Grid, Link } from '@material-ui/core';
import MUIDataTable from "mui-datatables";
const Category = () => {
    const initializze = { id: null, category_name: '' };
    const [category, setCategory] = useState([]);



    useEffect(() => {
        const Category = async () => {
            const url = 'http://127.0.0.1:8000/api/auth/category';
            const token = sessionStorage.getItem('token');
            const result = await axios.get(url, { headers: { "Authorization": `Bearer ${token}` } })
                .then(result => {
                    setCategory(result.data.categories);
                    console.log(result);
                }).catch(error => {
                    console.log(error);
                })
        }
        Category();
    }, []);

    const columns = [
        {
            name: "id",
            label: "Category Name",
            options: {
                filter: true,
                sort: true
            }
        },
        {
            name: "category_name",
            label: "Category Name",
            options: {
                filter: true,
                sort: true
            }
        },
        {
            name: "id",
            label: "Actions",
            options: {
                customBodyRender: (value, tableMeta, updateValue) => {
                    console.log(value, tableMeta);
                    return (
                        <Button
                            // onClick={handleDelete.bind(this, value)}
                            variant="outlined"
                            color="secondary"
                        >
                            {" "}
                            {`Delete`}{" "}
                        </Button>
                    );
                }
            }
        }
    ];

    const options = {
        filterType: "checkbox",
        // filterType: "dropdown",
        responsive: "stacked",
        onRowsDelete: rowsDeleted => {
            // axios.delete('http://127.0.0.1:8000/api/inventory/deleteAll/' + id).then(result => {
            // })
            console.log(rowsDeleted, "were deleted!");
        }
    };

    const items = category || [];

    return (
        <Container>
            <CssBaseline />
            <Grid item xs>
                <p>Category</p>
                <MUIDataTable
                    data={items}
                    columns={columns}
                    options={options}
                />
            </Grid>
        </Container>
    )

}


export default Category;