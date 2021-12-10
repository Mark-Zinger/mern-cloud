import axios from "axios";

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
    try {
       console.log('Login',{email,password})
    } catch (e) {
        console.log(e)
    }
}