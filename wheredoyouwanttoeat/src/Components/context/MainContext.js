import React, { createContext, useState } from 'react';

export const MainContext = createContext();

export const MainProvider = ({ children }) => {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [key, setKey] = useState('AIzaSyCJoZQo8YwkU6LNHDWwMcPwd9DY5Kl4Neo')

    return (
        <MainContext.Provider
            value={
                {
                    latitude,
                    setLatitude,
                    longitude,
                    setLongitude,
                    key,
                    setKey
                }
            }
            >
                {children}
        </MainContext.Provider>
    )
}