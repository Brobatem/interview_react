import React, { useState } from 'react';
import ProvinceInput from './components/ProvinceInput';
import BurgerMenu from './components/BurgerMenu';
import MainContent from './components/MainContent';

const provincesData = [
    { name: 'Jawa Barat', cities: ['Bandung', 'Bogor', 'Depok', 'Bekasi', 'Sukabumi'] },
    { name: 'Jawa Tengah', cities: ['Semarang', 'Surakarta', 'Magelang', 'Pekalongan', 'Tegal'] },
    { name: 'Jawa Timur', cities: ['Surabaya', 'Malang', 'Kediri', 'Blitar', 'Pasuruan'] },
    { name: 'DKI Jakarta', cities: ['Jakarta Pusat', 'Jakarta Selatan', 'Jakarta Timur', 'Jakarta Barat', 'Jakarta Utara'] },
    { name: 'Banten', cities: ['Tangerang', 'Serang', 'Cilegon', 'Pandeglang', 'Lebak'] },
    // data provinsi
];

const App = () => {
    const [numProvinces, setNumProvinces] = useState(0);
    const [selectedProvince, setSelectedProvince] = useState(null);

    const handleProvinceInputSubmit = (num) => {
        setNumProvinces(num);
    };

    const handleProvinceSelect = (province) => {
        setSelectedProvince(province);
    };

    const displayedProvinces = provincesData.slice(0, numProvinces);

    return (
        <div className="App">
            {!numProvinces ? (
                <ProvinceInput onSubmit={handleProvinceInputSubmit} />
            ) : (
                <>
                    <BurgerMenu provinces={displayedProvinces} onSelectProvince={handleProvinceSelect} />
                    <MainContent cities={selectedProvince ? selectedProvince.cities : []} />
                </>
            )}
        </div>
    );
};

export default App;

