import React, {useState} from 'react'
import {Stepper, Step, StepLabel, Typography, Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import Complete from './Complete';
import { mergeClasses } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
        width: "50%",
        margin: "6rem auto",
        border: "1px solid #999",
        "& .MuiStepIcon-root.MuiStepIcon-active": {
            color: "#746AB0",
        },
        "& .MuiStepIcon-root.MuiStepIcon-completed": {
            color: "#746AB0",
        },
    },
    btn: {
        width: "70%",
        marginLeft: "15%",
        marginRight: "15%",
        marginTop: "1rem",
        marginBottom: "3rem",
        height: "3rem",
        background: "#746AB0",
        color: "#fff",
        "&:hover": {
            background: "#c5bffb"
        }
    }
})

const Multistepform = () => {
    const [activeStep, setActiveStep] = useState(0);
    function getSteps() {
        return ["Details", "Password", "TnC"];
    }

const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
}

    const steps = getSteps();

    function getStepsContent(stepIndex) {
        switch(stepIndex)
        {
            case 0:
                return <StepOne/>;
            case 1:
                return <StepTwo/>;
            case 2:
                return <StepThree/>;
            default:
                return "Error 404 Not Found!";
        }
    }
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map(label => (
                    <Step key={label}>
                        <StepLabel>
                            {label}
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length ? <Complete/> : (
                <>
                {getStepsContent(activeStep)}
                <Button variant="contained" type="submit" className={classes.btn} onClick={handleNext}>
                {activeStep === steps.length-1 ? "Finish" : "Next"}
                </Button>
                </>
            )}
        </div>
    )
}

export default Multistepform
