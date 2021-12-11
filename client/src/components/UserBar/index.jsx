import Button from '@mui/material/Button';
import { useDispatch } from "react-redux";
import { LogOut } from '../../reducers/userReducer';

function UserBar() {

    const dispatch = useDispatch()


    return (
        <div>
            <Button color="inherit" onClick={ ()=> dispatch(LogOut()) }>LOG OUT</Button>
        </div>
    )
}

export default UserBar
