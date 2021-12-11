import { useCallback, useState } from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import Modal from '../Modal';

import * as userActions from '../../actions/user';



function AuthBar() {
    const [modal, setModal] = useState({
        isOpen: false,
        type: "login" // enum (login || registration)
    })
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const openModal = (type) => setModal({...modal, isOpen: true, type});
    const closeModal = () => setModal({...modal, isOpen: false});

    const modalTitles = {
        login: "Authorization",
        registration: "Registration"
    }
    
    const submit = useCallback((data)=>{
        userActions[modal.type](data)
    },[modal])


    return (

        <div>
            <Button color="inherit" onClick={()=> openModal("login")}>Auth</Button>
            <Button color="inherit" onClick={()=> openModal("registration")} >Register</Button>
            <Modal 
                open={modal.isOpen} 
                handleClose={closeModal} 
                title={modalTitles[modal.type]}
                onSubmit={()=> submit({email,password})}
                actions={
                    <Button type="submit">Submit</Button>
                }
            >   
                <TextField
                    autoFocus
                    margin="dense"
                    label="Email Address"
                    type="email"
                    fullWidth
                    onChange={({target})=>setEmail(target.value)}
                    value={email}
                />
                <TextField
                    margin="dense"
                    name="password"
                    label="Password"
                    type="password"
                    fullWidth
                    onChange={({target})=>setPassword(target.value)}
                    value={password}
                />
            </Modal>
        </div>
    )
}

export default AuthBar
