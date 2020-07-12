import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container } from '@material-ui/core';
import axios from 'axios';
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const Staffs = () => {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        // const api = 'your api';
        const getCategory = async () => {
            const token = localStorage.getItem('token');
            const result = await axios.get('http://127.0.0.1:8000/api/auth/category', { headers: { "Authorization": `Bearer ${token}` } })
                .then(result => {
                    setCategory(result.data.categories);
                }).catch(err => {
                    console.log(err);
                })
        }
        getCategory();

    }, []);
    const items = category || [];
    return (
        <Container>
            <CssBaseline />
            {items.length ? items.map((row) => (
                <TableRow key={row.id}>
                    <TableCell>
                        {row.id}
                    </TableCell>
                    <TableCell>
                        {row.category_name}
                    </TableCell>

                </TableRow>
            )) : <p>You Dont Have Permission</p>
            }
        </Container >
    )
}

export default Staffs;