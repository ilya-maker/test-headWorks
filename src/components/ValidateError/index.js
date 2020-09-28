import React from 'react';

// Styles
import './ValidateError.scss'

const ValidateError = ({message}) => {
    return (
        <div className="ValidateError">
            <span className="ValidateError__arrow"></span>
            <p className="ValidateError__text">Please {message}!</p>
        </div>
    );
}

export default ValidateError;