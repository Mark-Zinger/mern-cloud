import axios from "axios";
import { store } from '../reducers';
import { setUser } from "../reducers/userReducer";

export const registration = async ({email, password}) => {
    try {
        const response = await axios.post('http://localhost:5000/api/auth/registration',{
            email, password
        });
        alert(response.data.message);
        console.log(response.data);
    } catch (e) {
        alert(e.response.data.message);
    }
}

export const login = async ({email, password}) => {
    store.dispatch(async dispatch => {
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login',{
                email, password
            });
            
            dispatch(setUser(response.data))
            localStorage.setItem('token', response.data.token);
        } catch (e) {
            alert(e.response.data.message)
            console.dir(e)
        }
    })
}

export const auth = async () => {
    localStorage.getItem('token') &&
    store.dispatch(async dispatch => {
        try {
            const response = await axios.get('http://localhost:5000/api/auth/',{
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });

            dispatch(setUser(response.data))
            localStorage.setItem('token', response.data.token);
        } catch (e) {
            localStorage.removeItem('token')
            console.dir(e)
        }
    })
}