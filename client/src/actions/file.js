import axios from "axios";
import { store } from '../reducers';
import {addFile, setFiles} from "../reducers/fileReducer";

export function getFiles(dirId) {
    return async dispatch => {

        const parent = dirId ? `?parent=${dirId}` : '';

        try {
            const response = await axios.get(`http://localhost:5000/api/files${parent}`,{
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}`}
            });
            dispatch(setFiles(response.data.files));
        } catch (e) {
            console.dir(e)
            alert(e.response.data.message)
        }
    }
}

export function createDir( name) {

    const parent = store.getState().files.currentDir;

    return async dispatch => {
        try {
            const response = await axios.post(`http://localhost:5000/api/files`,
                { name, parent, type: 'dir' }, 
                { headers: {Authorization: `Bearer ${localStorage.getItem('token')}`} }
            )
            dispatch(addFile(response.data))
        } catch (e) {
            // alert(e.response.data.message)
            console.dir(e)
        }
    }
}