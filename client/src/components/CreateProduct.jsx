import React, { useState } from "react";
import axios from "axios";

const CreateProduct = props => {
    // Destructure the props
    const {submitState, setSubmitState} = props;

    // Track form changes with state
    const [formState, setFormState] = useState({
        title: "",
        price: 0,
        description: ""
    });
    const [validState, setValidState] = useState({})
    // Submit handler for the form
    const handleSubmit = event => {
        event.preventDefault();

        axios.post('http://localhost:8000/api/products/new', formState)
            .then(res => {
                setFormState({
                    title: "",
                    price: 0,
                    description: ""
                }) 
                setSubmitState(!submitState)
            })
            .catch(err => {
                console.log(err);
                const {errors} = err.response.data;
                let errorObj = {};
                for (let [key, value] of Object.entries(errors)) {
                    errorObj[key] = value.message;
                }
                setValidState(errorObj);
            });
    };

    const handleChange = event => {
        setFormState({
            ...formState,
            [event.target.name] : event.target.value
        })
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor="title">Title </label>
                <input type="text" name="title" onChange={handleChange} value={formState.title}/>
                {(validState.title) ? <p>{validState.title}</p> : null}
            </p>
            <p>
                <label htmlFor="price">Price </label>
                <input type="number" name="price" onChange={handleChange} value={formState.price}/>
                {(validState.price) ? <p>{validState.price}</p> : null}
            </p>
            <p>
                <label htmlFor="description">Description </label>
                <input type="text" name="description" onChange={handleChange} value={formState.description}/>
                {(validState.description) ? <p>{validState.description}</p> : null}
            </p>
            <button type="submit">Create</button>
        </form>
    )
}

export default CreateProduct;


