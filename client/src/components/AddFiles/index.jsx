import { useState, useCallback, } from "react";
import { useDispatch } from "react-redux";
import Button from '@mui/material/Button';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import UploadIcon from '@mui/icons-material/Upload';
import Stack from '@mui/material/Stack';


import TextField from '@mui/material/TextField';
import Modal from '../Modal';

import { createDir } from '../../actions/file';

function AddFiles() {

    const [modal, setModal] = useState({
        isOpen: false,
        type: "login" // enum (login || registration)
    })

    const dispatch = useDispatch();

    const [folderName, setFolderName] = useState('');

    const openModal = (type) => setModal({...modal, isOpen: true, type});
    const closeModal = () => setModal({...modal, isOpen: false});

    const modalTitles = {
        login: "Create new folder",
        registration: "Registration"
    }

    const submit = useCallback(()=>{
        if(folderName.trim()){
            dispatch(createDir(folderName));
            closeModal()
        } 
    },[folderName])

    return (
        <>
            <Stack direction="row" spacing={2}>
                <Button 
                    variant="outlined" 
                    startIcon={<CreateNewFolderIcon />}
                    onClick={()=> openModal("login")}
                >Create Folder</Button>
                <Button variant="outlined" startIcon={<UploadIcon />}>Upload Files</Button>
            </Stack>
            <Modal 
                open={modal.isOpen} 
                handleClose={closeModal} 
                title={modalTitles[modal.type]}
                maxWidth="xl"
                onSubmit={()=> submit()}
                actions={
                    <Button type="submit">Create</Button>
                }
            >   
                <TextField
                    autoFocus
                    margin="dense"
                    label="Folder name"
                    type="text"
                    fullWidth
                    onChange={({target}) => setFolderName (target.value)}
                    value={folderName}
                />

            </Modal>
        </>

    )
}

export default AddFiles
