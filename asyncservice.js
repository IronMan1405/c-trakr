import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


const storedUser = (values) => {
    console.log("store values = ", values);
    AsyncStorage.setItem('cars', JSON.stringify(values)).then((storeValues) => {
      console.log("stored: ", storeValues);
    }).catch((error) => {
      console.log("error while storing = ", error);
    });
};
const getUser = () => {
    console.log("getUser called");
    let savedItem = null;
    AsyncStorage.getItem('cars').then((res) => {
      console.log("get user res: ", res);
      const currentItem = JSON.parse(res);
      console.log("current: ", currentItem, typeof currentItem);
      savedItem = currentItem;
      console.log("saved: ", savedItem, typeof savedItem);
    }).catch((error) => {
        console.log("getUser, error is ", error);
    });
    return savedItem;
};
const mergeUser = (values) => {
  try {
    console.log("merge values = ", values);
    AsyncStorage.mergeItem('cars', JSON.parse(values)); 
  } catch (error) {
    console.log('merge, error is', error);
  }
};
const deleteAll = () => {
  try {
    let keys = AsyncStorage.getAllKeys();
    console.log("keys len = ", keys);
    if (!keys || keys === null) return;
    console.log("del, clear storage");
    AsyncStorage.clear().then(() => {
      console.log("clear done");
    });
    
  } catch (error) {
    console.log('del, error is', error);
  }
};

export {storedUser, getUser, mergeUser, deleteAll};