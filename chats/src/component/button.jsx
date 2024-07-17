import React from 'react';
import './button.css';

export default function Button({ onClick, text }) {
    return (
        <div className="button-container">
            <button className="button" onClick={onClick}>
                {text}
            </button>
        </div>
    );
}
