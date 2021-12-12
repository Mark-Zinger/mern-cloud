import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getFiles } from "../../actions/file";

import FileList from '../FIleList';
import BreadCrumb from "../BreadCrumb";
import AddFiles from "../AddFiles";




export default function Disk() {

    const dispatch = useDispatch();
    const currentDir = useSelector( state => state.files.currentDir );

    useEffect(() => {
        dispatch(getFiles(currentDir))
    }, [currentDir])

    return (
        <>
            <BreadCrumb/>
            <FileList/>      
            <AddFiles/>
        </>
    )
}
