import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();


const MyBottomTab = ({name = '', component}) => {
    return(
    <Tab.Navigator>
        <Tab.Screen name={name} component={component} />
    </Tab.Navigator>
    );
}

export default MyBottomTab;