import React, { useState, useEffect } from 'react'
import { Container , Button, TextField, Card, CardContent} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Axios from 'axios';

const AddFormInventory = (props) => {
    const initialState = { id: null, inventoryname : '', inventorycategoris: ''}
    const [inventory, setInventory] = useState(initialState);

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            marginTop: "10px",
        },
        form: {
          width: '100%', // Fix IE 11 issue.
          marginTop: theme.spacing(1),
        },
      }));

      const classes = useStyles();

    //   handleChangeinput
    const handleChange = event => {
        const {name, value} = event.target;
        // console.log(name);
        setInventory({...inventory, [name]: value })
    }

    const onSubmit = (event) => {
        event.preventDefault()
        const data = {
            inventoryname: inventory.inventoryname,
            inventorycategoris: inventory.inventorycategoris
        }

        console.log(data);

        Axios.post('http://127.0.0.1:8000/api/inventory/create/', data)
        .then(result=>{
            setSubmit(true);
            setInventory(result.data);
        })
        .catch(error => {
        })
    }

    return (
        <div className={classes.root}>
            <Container spacing={5}>
            <Card>
                <CardContent>
                   <form>
                   <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="inventoryname"
                        label="inventory name"
                        autoFocus
                        value={inventory.inventoryname}
                        onChange={handleChange}
                        name="inventoryname"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="inventory category"
                        autoFocus
                        value={inventory.inventorycategoris}
                        onChange={handleChange}
                        name="inventorycategoris"
                    />
                    <Button color="primary" onClick={onSubmit}>Save</Button>
                   </form>
                </CardContent>
            </Card>
        </Container>
        </div>
    )
}

export default AddFormInventory;