import { Toolbar, Typography, Grid } from '@material-ui/core';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

//style toggle for either complete or uncompleted section
const styles = {
    navEmpty: {
        backgroundImage: `url(images/side-background.png)`,
        marginTop: 15,
    },
    navFill: {
        backgroundColor: 'silver',
        marginTop: 15,

    }
};

function NavBar(props) {
    return (
        <Toolbar style={{ padding: 0 }} >

            {props.one && props.two ?
                // steps one and two are complete - gray all three sections
                <Grid container align="center" spacing={2}>
                    <Grid item style={styles.navFill} xl={3} lg={3} md={3} sm={3} xs={3} >
                        <Typography variant="subtitle1">
                            Add login details
                        </Typography>
                    </Grid>
                    <Grid item style={styles.navFill} xl={1} lg={1} md={1} sm={1} xs={1}>
                        <DoubleArrowIcon />
                    </Grid>
                    <Grid item style={styles.navFill} xl={4} lg={4} md={4} sm={4} xs={4}>
                        <Typography>
                            Select the user group
                        </Typography>
                    </Grid>
                    <Grid item style={styles.navFill} xl={1} lg={1} md={1} sm={1} xs={1}>
                        <DoubleArrowIcon />
                    </Grid>
                    <Grid item style={styles.navFill} xl={3} lg={3} md={3} sm={3} xs={3}>
                        <Typography>
                            Submit the form
                        </Typography>
                    </Grid>
                </Grid>

                :

                (props.one ?
                    //if step one is complete gray first two sections
                    <Grid container align="center" spacing={2}>
                        <Grid item style={styles.navFill} xl={3} lg={3} md={3} sm={3} xs={3} >
                            <Typography variant="subtitle1">
                                Add login details
                            </Typography>
                        </Grid>
                        <Grid item style={styles.navFill} xl={1} lg={1} md={1} sm={1} xs={1}>
                            <DoubleArrowIcon />
                        </Grid>
                        <Grid item style={styles.navFill} xl={4} lg={4} md={4} sm={4} xs={4}>
                            <Typography>
                                Select the user group
                            </Typography>
                        </Grid>
                        <Grid item style={styles.navEmpty} xl={1} lg={1} md={1} sm={1} xs={1}>
                            <DoubleArrowIcon />
                        </Grid>
                        <Grid item style={styles.navEmpty} xl={3} lg={3} md={3} sm={3} xs={3}>
                            <Typography>
                                Submit the form
                            </Typography>
                        </Grid>
                    </Grid>

                    :
                    //if no steps are complete gray only first section
                    <Grid container align="center" spacing={2}>
                        <Grid item style={styles.navFill} xl={3} lg={3} md={3} sm={3} xs={3} >
                            <Typography variant="subtitle1">
                                Add login details
                            </Typography>
                        </Grid>
                        <Grid item style={styles.navEmpty} xl={1} lg={1} md={1} sm={1} xs={1}>
                            <DoubleArrowIcon />
                        </Grid>
                        <Grid item style={styles.navEmpty} xl={4} lg={4} md={4} sm={4} xs={4}>
                            <Typography>
                                Select the user group
                            </Typography>
                        </Grid>
                        <Grid item style={styles.navEmpty} xl={1} lg={1} md={1} sm={1} xs={1}>
                            <DoubleArrowIcon />
                        </Grid>
                        <Grid item style={styles.navEmpty} xl={3} lg={3} md={3} sm={3} xs={3}>
                            <Typography>
                                Submit the form
                            </Typography>
                        </Grid>
                    </Grid>
                )}
        </Toolbar>
    );
};

export default NavBar;