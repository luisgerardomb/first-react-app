import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ({ target: { value } }) => {
        setInputValue(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2 ) {
            setCategories(categories => [inputValue, ...categories]);
            setInputValue('');
        } else {
            Swal.fire({
                icon: 'error',
                text: 'Ingresa una categoria',
            })
        }
    }

    return (
        <form onSubmit={handleSubmit} className="form__group field">
            <input 
                id="category"
                className="form__field"
                type="text"
                value={inputValue}
                onChange={ handleInputChange }
                placeholder="Categoría"
            />
            <label htmlFor="category" className="form__label">Categoría</label>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}

