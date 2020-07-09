import React, { useState, useEffect } from 'react'
import { Container , Button, TextField, Card, CardContent, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Axios from 'axios';
import { useHistory } from "react-router-dom";
import Box from '@material-ui/core/Box';
import {
    FormControl,
    InputLabel,
    Input
  } from "@material-ui/core";
const AddFormInventory = (props) => {
    const initialState = { id: null, inventoryname : '', inventorycategoris: ''}
    const [inventory, setInventory] = useState(initialState);
    const history = useHistory();

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
        event.preventDefault();
        const data = {
            inventoryname: inventory.inventoryname,
            inventorycategoris: inventory.inventorycategoris
        }

        console.log(data);
        

        Axios.post('http://127.0.0.1:8000/api/inventory/create/', data)
        .then(result=>{
            setSubmit(true);
            setInventory(result.data);
            
        // this.props.history.push("/inventory");

        })
        .catch(error => {
        }); 
        // history.push('/inventory');
        setInventory(initialState);
        
        // history.push("inventory");
    }

    const onBack = () => {
        history.push('/inventory');
    }

    return (
        <div className={classes.root}>
            <Container spacing={5}>
            {/* <Card>
                <CardContent>
                   <form>
                   
                    
                    <Button color="primary" onClick={onSubmit}>Save</Button>
                    <Button color="primary" onClick={onBack}>Back</Button>
                   </form>
                </CardContent>
            </Card> */}
            <Grid>
                <Grid item xs></Grid>
                <Grid item xs>
                    <Card>
                        <CardContent>
                        <form>
                            <h1>Contact Form</h1>
                    <FormControl margin="normal" fullWidth>
                        {/* <InputLabel htmlFor="name">Name</InputLabel> */}
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
                    </FormControl>

                    <FormControl margin="normal" fullWidth>
                        {/* <InputLabel htmlFor="email">Email</InputLabel> */}
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
                    </FormControl>

                    <FormControl margin="normal" fullWidth>
                        <InputLabel htmlFor="email">Message</InputLabel>
                        <Input id="email" multiline rows={10} />
                    </FormControl>

                    <Button variant="contained" onClick={onSubmit} color="primary" size="medium">
                        Send
                    </Button>
                    <Button color="primary" onClick={onBack}>Back</Button>
                        </form>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs></Grid>
            </Grid>
        </Container>
        </div>
    )
}

export default AddFormInventory;