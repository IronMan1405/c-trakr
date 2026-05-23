// CarService.js

import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = "cars";

export const CarService = {
  async getCars() {
    try {
      const storedCars = await AsyncStorage.getItem(STORAGE_KEY);
      if (!storedCars) {
        return [];
      }
      return JSON.parse(storedCars);
    } catch (error) {
      console.error('Error retrieving cars:', error);
      return [];
    }
  },

  async saveCar(car) {
    try {
		const storedCars = await this.getCars();
		const updatedCars = [...storedCars, car];
		await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedCars));
		return true;
    } catch (error) {
		console.error('Error saving car:', error);
		return false;
    }
  },

  async deleteAllCars() {
    try {
		await AsyncStorage.removeItem(STORAGE_KEY);
		return true;
    } catch (error) {
		console.error("Error deleting cars:", error); 
		return false;
    }
  },
};
