import React, { createContext, useContext, useState } from "react";

const CarContext = createContext();

export const useCars = () => {
	const context = useContext(CarContext);

	if (!context) {
		throw new Error("useCars must be used inside Provider");
	}

	return context;
};

export const CarProvider = ({children}) => {
	const [cars, setCars] = useState([]);
	return (
		<CarContext.Provider value={{cars, setCars}}>
			{children}
		</CarContext.Provider>
	);
};