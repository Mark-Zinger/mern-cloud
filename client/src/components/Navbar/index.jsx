import { Link } from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import BackupIcon from '@mui/icons-material/Backup';
import Button from '@mui/material/Button';

import AuthBar from "../AuthBar";

export default function Navbar () {
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
                <AuthBar/>
            </Toolbar>
        </AppBar>
    )
}