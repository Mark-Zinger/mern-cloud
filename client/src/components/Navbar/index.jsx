import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import BackupIcon from '@mui/icons-material/Backup';
import Button from '@mui/material/Button';

import AuthBar from "../AuthBar";
import UserBar from "../UserBar";

export default function Navbar () {

    const isAuth = useSelector(state => state.user.isAuth);


    return (
        <AppBar>
            <Toolbar>
                <Button
                    component={Link}
                    to="/"
                    variant="text" 
                    color="inherit" 
                    size="large" 
                    startIcon={<BackupIcon />} 
                    sx={{mr: 'auto'}}
                >
                    MERN CLOUD
                </Button>
                { isAuth
                    ? <UserBar/>
                    : <AuthBar/>
                }
                
            </Toolbar>
        </AppBar>
    )
}