import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreateProduct from '../components/CreateProduct';
import ProductList from '../components/ProductList';

const Main = props => {

    const [submitState, setSubmitState] = useState(false);

    return (
        <div>
            <CreateProduct submitState={submitState} setSubmitState={setSubmitState}/>
            <ProductList submitState={submitState} setSubmitState={setSubmitState}/>
        </div>
    )
}

export default Main;