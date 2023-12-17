import axios from "axios";

const url = "https://ecommerce-app-liart-zeta.vercel.app";

export const authenticateSignup = async (data) => {
  try {
    return await axios.post(`${url}/signup`, data);
  } catch (error) {
    console.log("Error while calling Signup API", error);
  }
};

export const authenticateLogin = async (data) => {
  try {
    return await axios.post(`${url}/login`, data);
  } catch (error) {
    console.log("Error while calling Login API", error);
    return error.response;
  }
};

export const payUsingPaytm = async (data) => {
  try {
    let response = await axios.post(`${url}/payment`, data);
    return response.data;
  } catch (error) {
    console.log("Error while calling payment api", error);
  }
};
