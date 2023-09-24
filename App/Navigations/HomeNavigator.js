import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from 'react-native'
import React from 'react'
import Home from '../Screen/Home'
import ReadNews from '../Screen/ReadNews'

const Stack = createStackNavigator();
const HomeNavigator = () => {
  return (
<Stack.Navigator 
screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="read-news" component={ReadNews} />
        {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
</Stack.Navigator>
)
}

export default HomeNavigator