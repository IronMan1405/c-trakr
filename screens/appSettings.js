import React from "react";
import { ScrollView, View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { ListItem } from 'react-native-elements';
import list1 from '../data.json';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale
import LinearGradient from 'react-native-linear-gradient'; // Only if no expo

const list = [
    {
      title: 'Users Profile ',
      icon: <Entypo name='add-user' />
    },
    {
      title: 'About C-TRAKR',
      icon: './c-trakr'
    },
    {
        title: 'Report',
        icon: <Feather name='alert-circle' />
             
    },
    {
        title: 'Social Media',
        icon: <Entypo name='users' />
    },
  ]
const Settings = () => {
    // console.log(list);
    // for (i in list) {
    //     console.log('listitem ', i, list.title, typeof list.title);
    // };

    

    const showSettings = () => {
        let result = [];
        for (let i in list) {
            result.push(
                <ListItem key={i+'_title'} topDivider bottomDivider style={styles.Settings} >
                    <ListItem.Content>
                        <ListItem.Title>
                            {list[i].title}
                        </ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron/>
                </ListItem>
            );
            
        };
        return result;
    };
     
    return (
        <View style={styles.container}>
            {
            list1.map((list1, idx) => {
                return(
                
                <ListItem key={idx+"_title"} topDivider bottomDivider style={styles.Settings}>
                    <ListItem.Content style={styles.container1}>
                        <ListItem.Title>{list1.name}</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron/>
                    {/* <Text>{list1.name}</Text> */}
                </ListItem> 
                );
            })

            }
        </View>
    );
};


const styles = StyleSheet.create({
    Settings: {
        borderColor: "Black",
        borderSize: 5,
        // backgroundColor: 'rgba(0,0,0,0)'
    },
    container: {
        flex: 1,
        // backgroundColor: 'hsla(223, 85%, 21%, 1)',
    },
    container1: {
        // padding: 25,
        // borderRadius: 15,
        // borderWidth: 1,
        // backgroundColor: 'rgba(0,0,0,0)'
        // backgroundColor: 'hsla(223, 85%, 21%, 1)',
    }

})
export default Settings;