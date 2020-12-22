import React, { useState } from "react";
import { ArcherContainer, ArcherElement } from "react-archer";
import { Container, Typography, TextField, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    title: {
        marginTop: 25,
    },
    submit: {
        marginTop: 10,
    }
  }));

function Stable_Matching(){

    const classes = useStyles();

    const [size, setSize]= useState(2);
    
    return(
        <Container fixed>
            <Typography className = {classes.title} align="center" variant="h4" color="inherit">Stable Matching Problem</Typography>
            <form noValidate autoComplete="off" align="center">
                <TextField id="standard-basic" label="Number to match: " onChange = { e => setSize(e.target.value)}/>
                <div>
                    <Button className = {classes.submit} variant="contained" color="primary">Setup</Button>
                </div>
            </form>

            <div>
                
            </div>
        </Container>
    );
}

export default Stable_Matching;