import React from 'react';
import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        headers: {
            Authorization: token
        },
        baseURL: 'http://localhost:4002/api'
    });
};