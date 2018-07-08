import axios from "axios";

export default {

    googleLogin: (patientData) => {
        return axios.post("/api/user/google", patientData);
    },
    localLogIn: (loginData) => {
        return axios.post("/api/user/locallogin", loginData);  
    },
    getGoogleId: () => {
        return axios.get("/api/googleclientid");
    },
    createAccount: (newUser)=> {
        return axios.post("/api/user/signup", newUser);
    },
    searchByEmail: (email) => {
        return axios.get("/api/user/" + email);
    },
    
    searchById: (id) => {
        // console.log("api", id)
        return axios.get("/api/user/get/" + id );
    },
 
    createPhoto: (data) => {
        return axios.post("/api/user/photo",  data);
    },

    createRecord: (record) => {
        return axios.post("api/records/record", record);
    },

    updateById: (id, object) => {
        return axios.post("/api/user/post/" + id, object);
    }

    // ,
    // setCookie: (userId) => {
    //     return axios.post("/api/cookie", userId);
    // },
    // getCookie: () => {
    //     return axios.get("/api/cookie");
    // }

}