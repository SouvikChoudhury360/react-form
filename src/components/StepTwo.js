import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {
    Typography,
    Button,
    Grid,
    Checkbox,
    TextField,
    OutlinedInput,
    FormControl,
    InputLabel,
    InputAdornment,
    IconButton,
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisiblityOff from "@material-ui/icons/VisibilityOff";

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

const StepTwo = () => {
    const [showPasswordValue, setShowPasswordValue] = useState({
        showPassword: false
    });
    const [showConfirmPasswordValue, setConfirmShowPasswordValue] = useState({
        showConfirmPassword: false
    });
    const handleClickShowPassword = () => {
        setShowPasswordValue({
            showPassword: !showPasswordValue.showPassword
        })
    }
    const handleClickShowConfirmPassword = () => {
        setConfirmShowPasswordValue({
            showConfirmPassword: !showConfirmPasswordValue.showConfirmPassword
        })
    }

    const classes = useStyles();
    return (
        <div className={classes.mainContainer}>
            <Typography
            variant='h5'
            style={{color: "#999", textAlign: "center"}}
            >
                Enter Your Password
            </Typography>   
            <div classes={classes.formContainer}>
            <form>
            <FormControl className={classes.inputField} variant='outlined'>
                <InputLabel>Password</InputLabel>
                <OutlinedInput
                type={showPasswordValue.showPassword ? "text" : "password"}
                labelWidth={70}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton edge="end" onClick={handleClickShowPassword}>      
                        {showPasswordValue.showPassword ? <Visibility/> : <VisiblityOff/>}                      
                        </IconButton>
                    </InputAdornment>
                }
                />
            </FormControl>  
            <FormControl className={classes.inputField} variant='outlined'>
                <InputLabel>Confirm Password</InputLabel>
                <OutlinedInput
                type={showConfirmPasswordValue.showConfirmPassword ? "text" : "password"}
                labelWidth={132}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton edge="end" onClick={handleClickShowConfirmPassword}>      
                        {showConfirmPasswordValue.showConfirmPassword ? <Visibility/> : <VisiblityOff/>}                      
                        </IconButton>
                    </InputAdornment>
                }
                />
            </FormControl>  
            </form>
            </div>      
        </div>
    )
}

export default StepTwo
