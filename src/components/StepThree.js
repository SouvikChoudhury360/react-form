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
    terms: {
        width: "80%",
        height: "22.5rem",
        overflowY: "scroll",
        marginLeft: "10%",
        marginRight: "10%",
        marginTop: "2rem",
    },
    checkBox: {
        width: "60%",
        marginTop: "1rem",
        marginBottom: "2rem",
        marginLeft: "20%",
        marginLeft: "20%",
    }
})

const StepThree = () => {
    const classes = useStyles();
    return (
        <div className={classes.mainContainer}>
            <Typography
            variant='h5'
            style={{color: "#999", textAlign: "center"}}
            >
                Terms & Conditions
            </Typography>  
            <section className={classes.terms}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl condimentum id venenatis a condimentum vitae. Pellentesque sit amet porttitor eget. Porta nibh venenatis cras sed felis. Dictum at tempor commodo ullamcorper. Fermentum leo vel orci porta non pulvinar neque. Rhoncus mattis rhoncus urna neque viverra. Risus ultricies tristique nulla aliquet enim tortor at auctor urna. Lorem ipsum dolor sit amet consectetur adipiscing. Dis parturient montes nascetur ridiculus. Enim neque volutpat ac tincidunt vitae semper quis lectus nulla. Dis parturient montes nascetur ridiculus. Pharetra magna ac placerat vestibulum lectus mauris. Est pellentesque elit ullamcorper dignissim. Ultrices vitae auctor eu augue ut lectus arcu bibendum. Et tortor consequat id porta nibh. Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Est sit amet facilisis magna etiam. Et leo duis ut diam quam nulla. Justo donec enim diam vulputate ut. Ultricies integer quis auctor elit sed vulputate. Lorem ipsum dolor sit amet consectetur. Adipiscing vitae proin sagittis nisl. Lacinia quis vel eros donec ac odio. Vehicula ipsum a arcu cursus vitae. At augue eget arcu dictum varius duis at. Suspendisse faucibus interdum posuere lorem. Vel facilisis volutpat est velit egestas dui id ornare arcu. Nisl vel pretium lectus quam id leo. Eget gravida cum sociis natoque penatibus et magnis dis. Quam elementum pulvinar etiam non quam. Id aliquet risus feugiat in ante metus. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Enim ut sem viverra aliquet eget sit amet tellus cras. Risus ultricies tristique nulla aliquet enim tortor at auctor urna. Amet risus nullam eget felis. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Pulvinar sapien et ligula ullamcorper malesuada proin libero. Malesuada bibendum arcu vitae elementum curabitur. Massa sapien faucibus et molestie ac feugiat sed lectus. Leo a diam sollicitudin tempor id. Tincidunt id aliquet risus feugiat in ante metus dictum at. A arcu cursus vitae congue. Nisl rhoncus mattis rhoncus urna neque viverra justo nec. Ornare aenean euismod elementum nisi quis eleifend. Ornare lectus sit amet est placerat in egestas erat imperdiet. Velit aliquet sagittis id consectetur purus ut. Ac turpis egestas integer eget aliquet. Nec feugiat in fermentum posuere urna nec. Porttitor massa id neque aliquam vestibulum morbi blandit cursus risus. Imperdiet massa tincidunt nunc pulvinar sapien et. Sodales neque sodales ut etiam sit. Dui nunc mattis enim ut. Congue eu consequat ac felis donec et odio pellentesque. Quis enim lobortis scelerisque fermentum dui faucibus in. Tellus cras adipiscing enim eu turpis egestas pretium. Sapien eget mi proin sed libero. Adipiscing at in tellus integer feugiat scelerisque varius. Imperdiet proin fermentum leo vel orci. Dignissim convallis aenean et tortor at risus viverra adipiscing. Sit amet cursus sit amet dictum sit amet. Non blandit massa enim nec dui. Scelerisque viverra mauris in aliquam sem. Elit sed vulputate mi sit. Nunc sed blandit libero volutpat sed cras ornare. Sed risus ultricies tristique nulla. Suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse. Fringilla est ullamcorper eget nulla facilisi etiam. Euismod nisi porta lorem mollis aliquam ut porttitor. Massa tempor nec feugiat nisl pretium. Quam adipiscing vitae proin sagittis. Nibh sed pulvinar proin gravida. Quis imperdiet massa tincidunt nunc. Ut tellus elementum sagittis vitae et leo duis ut. Et malesuada fames ac turpis egestas integer eget aliquet nibh. Mattis nunc sed blandit libero volutpat sed cras ornare arcu. Neque egestas congue quisque egestas diam in arcu. Sagittis purus sit amet volutpat consequat. Facilisis gravida neque convallis a cras semper auctor neque vitae. Quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Ornare lectus sit amet est placerat in egestas erat. Arcu odio ut sem nulla pharetra diam sit amet nisl. Bibendum arcu vitae elementum curabitur vitae nunc sed velit. Fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque. Dui vivamus arcu felis bibendum ut tristique et egestas. Nunc congue nisi vitae suscipit tellus mauris. In egestas erat imperdiet sed euismod nisi porta lorem. Magna fermentum iaculis eu non diam. Morbi leo urna molestie at elementum eu facilisis. Cursus turpis massa tincidunt dui ut ornare. Volutpat sed cras ornare arcu. Dictum sit amet justo donec enim diam vulputate ut pharetra. Dolor sit amet consectetur adipiscing. Et malesuada fames ac turpis. Felis imperdiet proin fermentum leo vel orci porta non. Lorem sed risus ultricies tristique. Risus commodo viverra maecenas accumsan lacus. Sodales ut eu sem integer vitae justo eget. Libero justo laoreet sit amet cursus sit amet dictum. Etiam non quam lacus suspendisse faucibus interdum posuere.
                </p>
            </section>
            <form>
            <FormGroup>
                <FormControlLabel control={
                <Checkbox
                color="default"
                />} 
                className={classes.checkBox}
                label="I agree to all the terms and conditions stated above." />
            </FormGroup>
            </form>
        </div>
    )
}

export default StepThree
