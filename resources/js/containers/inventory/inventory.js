import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const Inventory = () => {
    const [inventory, seTinventory] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/inventory')
        .then(res => {
            // console.log(res.data);
            seTinventory(res.data);
        })
        .catch(erorr =>{
            console.log(erorr);
        })
    }, []);

    const handleDelete = (id) => {
        axios.delete('http://127.0.0.1:8000/api/inventory/delete/' + id).then(result => {
            alert("success");
        })
    }

    const useStyles = makeStyles({
        table: {
          minWidth: 650,
        },
      });

    const classes = useStyles();

    const handleChange = (id) => {
        console.log(id);
    }

    
    return(
    <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>Nama Barang </TableCell>
                    <TableCell>Calories</TableCell>
                    <TableCell>Fat&nbsp;(g)</TableCell>
                    <TableCell align="center">Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {inventory.map((row) => (
                    <TableRow key={row.id}>
                        <TableCell>
                            {row.id}
                        </TableCell>
                    <TableCell>
                        {row.inventory_name}
                    </TableCell>
                    <TableCell>
                        {row.inventory_categories}
                    </TableCell>
                    <TableCell>
                        <Button align="center">edit</Button>
                        <Button align="center" onClick={handleDelete.bind(this, row.id)}>delete</Button>
                    </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
    )
}

export default Inventory;