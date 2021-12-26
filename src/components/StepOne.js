import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";
import {
    Typography,
    Button,
    Grid,
    Checkbox,
    TextField,
    OutlinedInput,
    FormControl,
    InputLabel,
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
        width: "100%",
        marginBottom: "1rem",
    }
})

const StepOne = () => {
    const classes = useStyles();
    const [user, setUser] = useState({
        name: "", email: "", phone: "",
    });
    let name, value;
    const handleInputs = (e) => {
        console.log(e);
        name= e.target.name;
        value= e.target.value;
        setUser({...user, [name]:value});
    }
    return (
        <div className={classes.mainContainer}>
            <Typography
            variant='h5'
            style={{color: "#999", textAlign: "center"}}
            >
                Enter Your Details
            </Typography>
            <div className={classes.formContainer}>
            <form>
                <TextField
                className={classes.inputField}
                name= "email"
                value= {user.email}
                onChange={handleInputs}
                label="E-mail Address"
                variant="outlined"
                />
                <TextField
                className={classes.inputField}
                name= "name"
                value= {user.name}
                onChange={handleInputs}
                label="Name"
                variant="outlined"
                />
                <IntlTelInput
                className={classes.inputField}
                name= "phone"
                value= {user.phone}
                onChange={handleInputs}
                preferredCountries={["in"]}
                />
            </form>
            </div>
        </div>
    )
}

export default StepOne
