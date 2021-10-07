import { AppBar, Toolbar, Typography } from '@material-ui/core';

function Header() {
    return (
        <AppBar color="inherit" position="static">
            <Toolbar>
                <img style={{ width: 35, marginRight: 15 }} src='images/icon.png' />
                <Typography variant="h6" >
                    Add new User Profile
                    </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header;