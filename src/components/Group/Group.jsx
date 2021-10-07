import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { Container, Grid, Typography, Button, Select, MenuItem, FormControl } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

function Group() {
    //create variables to hold local states
    const [complete, setComplete] = useState(false);
    const [group, setGroup] = useState('');

    //pull group list from store
    const gList = useSelector(store => store.gList);
    console.log('group list reducer', gList);

    //create variable to use function
    const dispatch = useDispatch();
    const history = useHistory();

    //grab group options from store on page load
    useEffect(() => {
        dispatch({ type: 'FETCH_GROUP_LIST' })
    }, [])

    //makes effective change immediately for complete state
    useEffect(() => {
        console.log(complete);
        if (complete === true) {
            completeTwo();
        }
    }, [complete]);

    //form validation
    const isEnabled = group.length > 0;

    //changes complete state when next button clicked
    function changeComplete() {
        setComplete(true);
    }

    //called when useEffect triggered by complete state change becomes true from button click
    function completeTwo() {
        console.log(complete);
        dispatch(
            {
                type: 'ADD_SECTION_TWO',
                payload: {
                    group: group,
                    complete: complete
                }
            }
        );
        console.log(complete)
        history.push('/submit')
        setGroup('');
        setComplete(false);
        console.log(complete)

    }

    //erases whats stored in reducers and brings user back to first page
    function cancelForm() {
        setGroup('');
        history.push('/')
        console.log(complete)
        dispatch({ type: 'RESET_SECTION_ONE' },
            { type: 'RESET_SECTION_TWO' });
    }




    return (
        <Container
            style={{ marginTop: 20 }}>
            <Grid>
                <Grid item>
                    <Typography variant="subtitle1">Choose the User Group</Typography>
                </Grid>
            </Grid>
            <br />
            <Grid style={{ display: 'flex' }}>
                <Grid item>
                    <Typography style={{ fontWeight: 'bold' }}
                        variant="body2" color="secondary"
                        align="left"  >USER GROUP
                    </Typography>
                </Grid>
                &nbsp;&nbsp;&nbsp;
                <Grid item>
                    <Typography
                        variant="body2"
                        style={{ fontWeight: 'lighter' }}>User group to add the user to
                    </Typography>
                </Grid>
            </Grid>
            <FormControl size="small" fullWidth>
            <Select
                value={group}
                onChange={(event) => setGroup(event.target.value)}
                displayEmpty
                fullWidth
                variant="outlined"
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                {gList.map(type => {
                    return <MenuItem key={type.id} value={type.name}>{type.name}
                </MenuItem>
                })}
            </Select>
            </FormControl>
            <br />
            <br />
            <Grid>
                <Grid align="right" >
                    <Button variant="contained" onClick={cancelForm} color="primary">Cancel</Button>
                    <Button style={{ marginLeft: 15 }} onClick={changeComplete} color="secondary" variant="contained" disabled={!isEnabled} >Next</Button>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Group;