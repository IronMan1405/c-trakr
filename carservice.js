// CarService.js

import AsyncStorage from '@react-native-async-storage/async-storage';

export const CarService = {
  async getCars() {
    try {
      const storedCars = await AsyncStorage.getItem('cars');
      if (storedCars !== null) {
        return JSON.parse(storedCars);
      }
      return [];
    } catch (error) {
      console.error('Error retrieving cars:', error);
      return [];
    }
  },

  async saveCar(carName, fuel, carType) {
    try {
      const car = { name: carName, fuel: fuel, car: carType };
      let storedCars = await AsyncStorage.getItem('cars');
      storedCars = storedCars ? JSON.parse(storedCars) : [];
      storedCars.push(car);
      await AsyncStorage.setItem('cars', JSON.stringify(storedCars));
      return true;
    } catch (error) {
      console.error('Error saving car:', error);
      return false;
    }
  }
};
