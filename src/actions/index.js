import axios from "axios";
import {
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
    FETCH_RESOURCES_START,
    FETCH_RESOURCES_FAILURE,
    FETCH_RESOURCES_SUCCESS
} from "./types";
import authService from "../services/auth-service";

const BASE_URL = 'https://dataprocessor.api.lmis.techclick.rw';

const registerStart = () => {
    return {
        type: REGISTER_START
    };
};

const registerSuccess = () => {
    return {
        type: REGISTER_SUCCESS
    };
};

const registerFailure = (errors) => {
    return {
        type: REGISTER_FAILURE,
        errors
    };
};

export const register = (userData) => {
    return (dispatch) => {
        return axios
            .post(`${BASE_URL}/register`, {
                ...userData
            })
            .then(dispatch(registerStart()))
            .then((res) => {
                if (res.status === 200) {
                    dispatch(registerSuccess());
                    alert('Success')
                } else if (res.status === 401) {
                    dispatch(registerFailure(res.data.description));
                } else {
                    dispatch(registerFailure(res.data.description));
                }
            })
            .catch((err) => {
                if (err.message === "Network Error") {
                    alert("Try again Oops, Something went wrong");
                }
                dispatch(registerFailure(err.message));
            });
    };
};

const loginStart = () => {
    return {
        type: LOGIN_START
    };
};

export const loginSuccess = () => {
    return {
        type: LOGIN_SUCCESS
    };
};

export const loginFailure = (errors) => {
    return {
        type: LOGIN_FAILURE,
        errors
    };
};

export const checkAuthState = () => {
    return (dispatch) => {
        if (authService.isAuthenticated()) {
            dispatch(loginSuccess());
        }
    };
};

export const login = (userData) => {
    return (dispatch) => {
        return axios
            .post(`${BASE_URL}/login`, {
                ...userData
            })
            .then(dispatch(loginStart()))
            .then((res) => {
                if (res.status === 200) {
                    authService.saveObject(res.data.body); // Storing access token to local storage
                    dispatch(loginSuccess());
                } else {
                    const msg = res.data.description ?
                        res.data.description :
                        "Incorrect email or password!";
                    dispatch(loginFailure(msg));
                }
            })
            .catch((error) => {
                if (error.status === 500 || error.status === 502 || error.status === 503) {
                    dispatch(loginFailure(error.message));
                }
            });
    };
};

export const logout = () => {
    authService.invalidateUser();
    return {
        type: LOGOUT
    };
};

const fetchResourcesStart = () => {
    return {
        type: FETCH_RESOURCES_START
    };
};

export const fetchResourcesSuccess = (resources) => {
    return {
        type: FETCH_RESOURCES_SUCCESS,
        resources
    };
};

export const fetchResourcesFailure = (errors) => {
    return {
        type: FETCH_RESOURCES_FAILURE,
        errors
    };
};

export const fetchResources = () => {
    return (dispatch) => {
        axios.get(`${BASE_URL}/resources`)
            .then(dispatch(fetchResourcesStart()))
            .then((res) => dispatch(fetchResourcesSuccess(res.data)))
            .catch((error) => dispatch(fetchResourcesFailure(error.message)));
    };
};