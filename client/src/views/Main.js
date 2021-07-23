import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreateProduct from '../components/CreateProduct';

export default () => {
    const [ message, setMessage ] = useState('Loading...');

    useEffect(() => {
        axios.get('http://localhost:8000/api/')
            .then(res => setMessage(res.data.message))
            .catch(err => console.log(err))
    }, []);

    return (
        <div>
            <CreateProduct/>
        </div>
    )
}