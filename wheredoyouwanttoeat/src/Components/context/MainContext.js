import React, { createContext, useState } from 'react';

export const MainContext = createContext();

export const MainProvider = ({ children }) => {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);

    return (
        <MainContext.Provider
            value={
                {
                    latitude,
                    setLatitude,
                    longitude,
                    setLongitude
                }
            }
            >
                {children}
        </MainContext.Provider>
    )
}