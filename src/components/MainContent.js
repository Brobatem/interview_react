import React from 'react';

const MainContent = ({ cities }) => (
    <div className="MainContent">
        {cities.length > 0 ? (
            <ul>
                {cities.map((city, index) => (
                    <li key={index}>{city}</li>
                ))}
            </ul>
        ) : (
            <p>Pilih provinsi untuk melihat kotanya.</p>
        )}
    </div>
);

export default MainContent;
