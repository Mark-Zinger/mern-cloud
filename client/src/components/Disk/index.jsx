import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getFiles } from "../../actions/file";

import FileList from '../FIleList';
import BreadCrumb from "../BreadCrumb";
import AddFiles from "../AddFiles";
import { pushToFileStack, setCurrentDir } from "../../reducers/fileReducer";

import Button from '@mui/material/Button';


export default function Disk() {

    const dispatch = useDispatch();
    const currentDir = useSelector( state => state.files.currentDir );
    const dirStack = useSelector( state => state.files.dirStack );

    useEffect(() => {
        dispatch(getFiles(currentDir));
    }, [currentDir])

    function backClickHandler() {
        const backDir_id = dirStack.pop()
        if(backDir_id !== undefined) dispatch(setCurrentDir(backDir_id))
    }

    return (
        <>
            <BreadCrumb/>
            {currentDir && <Button onClick={()=> backClickHandler()} variant="contained" >Back</Button>}
            <FileList/>      
            <AddFiles/>
        </>
    )
}
