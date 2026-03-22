import React, { createContext, useContext, useState } from "react";

const MyListContext = createContext();
const MyDistContext = createContext();

const useMyList = () => {
  const context = useContext(MyListContext);
  if (!context) {
    throw new Error("useMyList must be used in Provider");
  }
  return context;
};

const useMyDist = () => {
  const context = useContext(MyDistContext);

  if (!context) {
    throw new Error("useMyDist must be used in Provider");
  }
  return context;
};

const MyListProvider = (props) => {
  const [myList, setMyList] = useState([]);
  const [totalDist, setTotalDist] = useState(0);

  return (
    <>
      <MyListContext.Provider {...props} value={{ myList, setMyList, totalDist, setTotalDist }} ></MyListContext.Provider>
    </>
  );
};
export { MyListProvider, useMyList, useMyDist };
