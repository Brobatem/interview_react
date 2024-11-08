import React, { useState } from 'react';

const ProvinceInput = ({ onSubmit }) => {
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = () => {
        const num = parseInt(inputValue, 10);
        if (num >= 1 && num <= 32) {
            setError('');
            onSubmit(num);
        } else {
            setError('Masukkan angka antara 1 hingga 32.');
        }
    };

    return (
        <div>
            <input
                type="number"
                placeholder="Masukan angka"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default ProvinceInput;
