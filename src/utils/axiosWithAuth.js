import axios from 'axios';

const axiosWithAuth = ()=> {
    const token = window.localStorage.getItem('token')

    return axios.create({
        headers:{
            authorization:token
        }
    })
}

export default axiosWithAuth;

//Task List:
//1. Complete axiosWithAuth