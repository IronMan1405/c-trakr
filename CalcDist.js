import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Geolocation from "@react-native-community/geolocation";
import { getDistance } from "geolib";
import { useMyDist } from "./MyListContext";


export default async function CalcDist() {
  let { myTotDist } = useMyDist();
  let { setMyTotDist } = useMyDist();
  const watchPos = () => {
    try {
      const watchID = Geolocation.watchPosition(
        (pos) => {
          let coords = pos.coords; 
          console.log("watchPos is ", JSON.stringify(coords));
          setPos(JSON.stringify(coords));
          history.push(coords);
          setHistory([].concat(history));
          let dist = getDistance(history[0], coords, (accuracy = 0.01));
          let dist2 = getDistance(
            { latitude: 9, longitude: 20 },
            { latitude: 10, longitude: 20 }, 
            (accuracy = 0.01),
          );
          setDist(dist);
          // console.log('dist2 is ', JSON.stringify(dist2), 'meters.');
          // console.log('dist is ', JSON.stringify(dist), 'meters.');
          let myTotalDist = 0;
          for (let i = 0; i < history.length - 1; i++) {
            let myDist = getDistance(
              history[i],
              history[i + 1],
              (accuracy = 0.01),
            );
            console.log("my Dist: ", myDist);
            console.log("totalDist: ", myTotDist);
            myTotDist += myDist;
            setMyTotDist(myTotalDist);
          }
        },
        (error) => alert("Error in Watch Position", JSON.stringify(error)),
      );
      setSubscriptionId(watchID);
    } catch (error) {
      alert(JSON.stringify(error));
    }
  };

  const clearWatch = () => {
    SubscriptionId !== null && Geolocation.clearWatch(SubscriptionId);
    setSubscriptionId(null);
    // setPrevPos(pos);
    // console.log('prevpos = ', prevPos);
    setPos(null);
  };

  const [pos, setPos] = useState();
  const [prevPos, setPrevPos] = useState();
  const [SubscriptionId, setSubscriptionId] = useState();
  const [history, setHistory] = useState([]);
  const [dist, setDist] = useState(0);

  useEffect(() => {
    return () => clearWatch();
  }, []);

  const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

  while (true) {
    clearWatch();
    watchPos();
    console.log("Last pos: ", pos || unknown);
    console.log("history: ", JSON.stringify(history));
    console.log("current dist: {} meters", dist);
    console.log("Total dist: {} meters", totalDist);
    await sleep(7500);
}
  

  {
    /*<View style={styles.container}>
      <Text>Last position: </Text>
      <Text>{pos || 'unknown'}</Text>*/
  }

  {
    /* <Text>Previous Pos: </Text>
      <Text>{prevPos}</Text> */
  }

  {
    /*{SubscriptionId !== null ?
      (<Button title="Clear watch" onPress={clearWatch} />)
      :
      (<Button title="Watch Position" onPress={watchPos} />)}
      <View>
        <Text>history: </Text>
        <Text>{ JSON.stringify(history) }</Text>
        <Text>pos = {pos}</Text>
        <Text>distance = {dist} meters.</Text>
        <Text>Total distance = {totalDist}</Text>
      </View>
    </View>*/
  }
}
//create our styling code:
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, //the container will fill the whole screen.
    justifyContent: "center",
    alignItems: "center",
  },
});
