import React from "react";
import { useMyDist } from "./MyListContext";

export default CalcFuel = () => {
    let { totDist } = useMyDist();
    let data = navigation.route.params;
    let FuelConsumption = 0;
    if (data.car === 'Compact Car') {
        const compact_consumptionVals = [6.83, 5.23, 16.14];
        
        if (data.fuel === 'Petrol') {
            FuelConsumption = compact_consumptionVals[0];
            return FuelConsumption;
        }
        else if (data.fuel === 'Diesel') {
            FuelConsumption = compact_consumptionVals[1];
            return FuelConsumption;
        }
        else if (data.fuel === 'Electric') {
            FuelConsumption = compact_consumptionVals[2];
            return FuelConsumption;
        };
    }
    else if (data.car === 'Mid-ranged Car') {
        const midrange_consumptionVals = [8.42, 6.7, 19.9];
        
        if (data.fuel === 'Petrol') {
            FuelConsumption = midrange_consumptionVals[0];
            return FuelConsumption;
        }
        else if (data.fuel === 'Diesel') {
            FuelConsumption = midrange_consumptionVals[1];
            return FuelConsumption;
        }
        else if (data.fuel === 'Electric') {
            FuelConsumption = midrange_consumptionVals[2];
            return FuelConsumption;
        };
    } 
    else if (data.car === 'Luxury Car') {
        
    }
};