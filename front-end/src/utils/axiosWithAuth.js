import axios from 'axios';

export const axiosWithAuth = () =>{
    //Get the token from local storage
    const token = localStorage.getItem('token');
    return axios.create({
        headers:{
            authorization: token,
        },
        baseURL:"https://ft-potluck-planner-5.herokuapp.com/api",
        
    });
};