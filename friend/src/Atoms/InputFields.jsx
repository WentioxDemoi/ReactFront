import React, { useState } from 'react';

export default function InputField({ id, label, type, placeholder, onChange }) {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        // Appel de la fonction onChange avec la valeur de l'entrée
        onChange(value);
    };

    return (
        <div>
            <label htmlFor={id} className="block mb-2 mt-4 text-sm font-medium text-gray-900">{label}</label>
            <input type={type}
                id={id}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder={placeholder}
                value={inputValue}
                onChange={handleInputChange}
                required
            />
        </div>
    );
}
