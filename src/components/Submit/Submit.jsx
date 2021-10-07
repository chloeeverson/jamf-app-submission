import { Typography, TextField, Container, Grid, Button } from "@material-ui/core";
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';

function Submit() {
    //declare variables to use functions
    const dispatch = useDispatch();
    const history = useHistory();

    //grab entered login and group info from reducers
    const group = useSelector(store => store.group);
    const login = useSelector(store => store.login);

    //resets form for new user
    function submitForm() {
        history.push('/')
        dispatch({ type: 'RESET_SECTION_TWO' });
        dispatch({
            type: 'RESET_SECTION_ONE'
        });
    }

    //resets form 
    function cancelForm() {
        history.push('/')
        dispatch({ type: 'RESET_SECTION_TWO' },
            { type: 'RESET_SECTION_ONE' });

    }

    return (
        <Container style={{ marginTop: 20 }}>
            <Grid>
                <Grid item>
                    <Typography
                        variant="overline">EMAIL</Typography>
                </Grid>
                    <TextField
                        type='text'
                        defaultValue={login.email}
                        variant='outlined'
                        fullWidth
                        size="small"
                        inputProps={
                            { readOnly: true, }
                        }
                    />
            </Grid>
            <br />
            <Grid item>
                <Typography variant="overline">USER GROUP</Typography>
            </Grid>
            <TextField
                type='text'
                defaultValue={group.group}
                variant='outlined'
                fullWidth
                size="small"
                inputProps={
                    { readOnly: true, }
                }
            />
            <br />
            <br />
            <Grid align="right">
                <Button variant="contained" onClick={cancelForm} color="primary">Cancel</Button>
                <Button style={{ marginLeft: 15 }} onClick={submitForm} color="secondary" variant="contained">Submit</Button>
            </Grid>
        </Container>
    )
}

export default Submit;