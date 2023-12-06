import axios from "axios";
const login = async(formdata) => {
    const response = await axios.post("/api/user/login", formdata);
    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    
    return await response.data;
}

const register = async (formdata) => {
    const response = await axios.post("/api/user/register", formdata);
    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }

      return await response.data;
}

const logOut = () => {
    localStorage.removeItem("user")
}

export const userService = {
    login,
    register,
    logOut,

}