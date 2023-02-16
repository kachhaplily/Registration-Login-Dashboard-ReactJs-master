import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';


export default function Navbar() {
    return (
        <div> <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Regiration Login
                    </Typography>
                    <Link to='/'
                        style={{
                            textDecoration: 'none',
                            color: 'inherit'
                        }}
                    >
                        <Button color="inherit">Login</Button>
                    </Link>
                    <Link to='regi'
                        style={{
                            textDecoration: 'none',
                            color: 'inherit'
                        }}
                    >
                        <Button color="inherit">Sing Up</Button>
                    </Link>
                    <Link to='/dashboard'
                        style={{
                            textDecoration: 'none',
                            color: 'inherit'
                        }}
                    >
                        <Button color="inherit">Dashboard</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
        </div>
    )
}
