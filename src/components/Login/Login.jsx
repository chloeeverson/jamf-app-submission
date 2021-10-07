import { TextField, Container, Grid, Typography, Button } from '@material-ui/core'
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Login() {
    //create variables to use functions
    const dispatch = useDispatch();
    const history = useHistory();

    //create local states to be able to send off to store
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [verify, setVerify] = useState('');
    const [complete, setComplete] = useState(false);

    //makes immediate change of state once triggered
    //calls function if true
    useEffect(() => {
        console.log(complete);
        if (complete === true) {
            completeOne();
        }
    }, [complete]);

    //form validation
    const isEnabled = email.length > 0 && password.length > 0 && verify.length > 0;

    //changes state when Next button click
    function changeComplete() {
        setComplete(true);
    }

    //sends off login info to be stored in reducer
    function completeOne() {
        console.log(complete);
        dispatch(
            {
                type: 'ADD_SECTION_ONE',
                payload: {
                    email: email,
                    password: password,
                    complete: complete,
                }
            }
        );
        console.log(complete)
        history.push('/group')
        setEmail('');
        setPassword('');
        setVerify('');
        setComplete(false);
        console.log(complete)
    }

    //empties store for startover
    function cancelForm() {
        dispatch(
            { type: 'RESET_SECTION_ONE' });;
    }


    return (
        <Container style={{ marginTop: 20 }}>
            <Grid>
                <Grid item>
                    <Typography variant="overline">EMAIL</Typography>
                </Grid>
                <Grid item> 
                    <TextField size="small" placeholder="(Required)" fullWidth variant="outlined" value={email}
                    onChange={(event) => setEmail(event.target.value)} />
                </Grid>
                <br />
                <Grid item>
                    <Typography variant="overline" align="left" >PASSWORD</Typography>
                </Grid>
                <Grid item> 
                    <TextField size="small" placeholder="(Required)" fullWidth variant="outlined" value={password}
                    onChange={(event) => setPassword(event.target.value)} />
                </Grid>
                <br />
                <Grid item>
                    <Typography variant="overline" align="left" >VERIFY PASSWORD</Typography>
                </Grid>
                <Grid item>
                    <TextField size="small" placeholder="(Required)" fullWidth variant="outlined" value={verify}
                    onChange={(event) => setVerify(event.target.value)} />
                </Grid>
            </Grid>
            <br />
            <Grid align="right">
                <Button variant="contained" onClick={cancelForm} color="primary">Cancel</Button>
                <Button style={{ marginLeft: 15 }} onClick={changeComplete} color="secondary" variant="contained" disabled={!isEnabled} >Next</Button>
            </Grid>
        </Container>
    )
}

export default Login;