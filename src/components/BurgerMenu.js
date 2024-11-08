import React, { useState } from 'react';

const BurgerMenu = ({ provinces, onSelectProvince }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button className="menu-toggle-button" onClick={toggleMenu}>
                {isOpen ? '✖ Tutup Menu' : '☰ Buka Menu'}
            </button>
            <div className={`burger-menu ${isOpen ? 'active' : ''}`}>
                <h3>Pilih Provinsi</h3>
                <ul>
                    {provinces.map((province, index) => (
                        <li key={index} onClick={() => onSelectProvince(province)}>
                            {province.name}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default BurgerMenu;
