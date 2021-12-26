import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {
    Typography,
    Button,
    Grid,
    Checkbox,
    FormGroup,
    FormControlLabel,
    TextField,
    OutlinedInput,
    FormControl,
    InputLabel,
    InputAdornment,
    IconButton,
} from "@material-ui/core";

const useStyles = makeStyles({
    mainContainer: {
        display: "grid",
        justifyContent: "center",
        position: "relative",
        zIndex: 5,
    },
    formContainer: {
        position: "relative",
        width: "28.125rem",
        height: "auto",
        padding: "2rem",
    },
    inputField: {
        width: "60%",
        marginLeft: "20%",
        marginRight: "20%",
        marginTop: "1rem",
        marginBottom: "1rem",
    }
})

const Complete = () => {
    const classes = useStyles();
    return (
        <div className={classes.mainContainer}>
            <Typography
            variant='h5'
            style={{color: "#999", textAlign: "center"}}
            >
                Thanks for Submitting!
            </Typography>  
        </div>
    )
}

export default Complete
