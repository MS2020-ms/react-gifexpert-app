//rafc + ENTER

import React, { useState } from 'react';
import PropTypes from 'prop-types';

//recibo el setCategories por los props
export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('Buscar gifs...'); //useState()-> undefined

    const handleInputChange = (e) => {
        //console.log(e.target.value);
        setInputValue(e.target.value);
    }

    //escribo y al hacer Enter:
    const handleSubmit = (e) => {
        e.preventDefault();

        //para evitar campos vacios
        if (inputValue.trim().length > 1) {
            //se pone al principio
            setCategories(cats => [inputValue, ...cats]);
            //se pone al final
            //setCategories(cats => [...cats, inputValue]);
            //dejo en blanco en campo de input
            setInputValue('');
        }

    }

    return (
        <>
            {/* <h3>{inputValue}</h3> */}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </form>
        </>
    );
}

//propTypes de setCategories requerido!
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}