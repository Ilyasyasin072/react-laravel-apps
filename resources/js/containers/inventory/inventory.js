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
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';
import MUIDataTable from "mui-datatables";
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
        // console.log(name);
        axios.delete('http://127.0.0.1:8000/api/inventory/delete/' + id).then(result => {
            seTinventory(inventory.filter(row => row.id !== id));
        })
        console.log('success');
    }


    const handleDeleteAll = (id) => {
        axios.delete('http://127.0.0.1:8000/api/inventory/deleteAll/' + id).then(result => {
            console.log(result);
        })
    }


    const useStyles = makeStyles({
        table: {
          minWidth: 650,
        },
        root: {
            flexGrow: 1,
          }
      });

    const classes = useStyles();

    const addColumn = () => {
        setColumns([ ...columns, {
          name: "NewColumn"
        }]);
      };

    // const columns = ["inventory_name", "inventory_categories", "created_at", "updated_at"];
    const columns = [
        {
         name: "inventory_name",
         label: "Inventory Name",
         options: {
          filter: true,
          sort: true,
         }
        },
        {
         name: "inventory_categories",
         label: "Inventory Category",
         options: {
          filter: true,
          sort: true,
         }
        },
        {
         name: "created_at",
         label: "Create",
         options: {
          filter: true,
          sort: false,
         }
        },
        {
         name: "updated_at",
         label: "Update",
         options: {
          filter: true,
          sort: false,
         }
        },
        {
            name: "id",
            label: "Actions",
            options: {
              customBodyRender: (value, tableMeta, updateValue) => {
                  console.log(value, tableMeta);
                return (
                  <Button onClick={handleDelete.bind(this, value)} variant="outlined" color="secondary">
                    {`Delete`}
                  </Button>
                );
              }
            }
          }
       ];
       
    const options = {
    filterType: 'checkbox',
      filterType: 'dropdown', responsive: 'stacked', onRowsDelete: (rowsDeleted) => { 
        // axios.delete('http://127.0.0.1:8000/api/inventory/deleteAll/' + id).then(result => {
        // })  
        console.log(result.data[0].dataIndex);
        console.log(rowsDeleted, "were deleted!");
         },
    };

    
    return(
        <div className={classes.root}>
            <Grid container spacing={5}>
                <Grid item xs={12}>
                    <MUIDataTable
                    // title={"Employee List"}
                    title={<div><Link to="add-inventory">
                    <Button color="primary">Add Inventory Item</Button>
                </Link></div>}
                    data={inventory}
                    columns={columns}
                    options={options}
                    />
                </Grid>
            
            </Grid>
        </div>
                    /* <Grid container spacing={3}>
                <Grid item xs={12}>
                <TableContainer component={Paper}>
                    <Link to="add-inventory">
                        <Button color="primary">Add Inventory Item</Button>
                    </Link>
                <hr/>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nama Barang </TableCell>
                            <TableCell>Calories</TableCell>
                            <TableCell>Fat&nbsp;(g)</TableCell>
                            <TableCell>Fat&nbsp;(g)</TableCell>
                            <TableCell>Fat&nbsp;(g)</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {inventory.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell>
                                    {row.id}
                                </TableCell>
                            <TableCell name={row.id}>
                                {row.inventory_name}
                            </TableCell>
                            <TableCell>
                                {row.inventory_categories}
                            </TableCell>
                            <TableCell>
                                {row.updated_at}
                            </TableCell>
                            <TableCell>
                                {row.created_at}
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
                </Grid>
            </Grid> */
    )
}

export default Inventory;