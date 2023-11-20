import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native'; 
import { Avatar, Button, Card } from "react-native-paper";
import Ionicons from '@expo/vector-icons/Ionicons';

import Event from '../screens/home.js';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


const DashboardIcon =({focused, color, size})=><Ionicons name='md-speedometer' size={size} color={color} />

const NavDrawer = () => {
    return (
      <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainDrawer">
        {() => (
          <Drawer.Navigator 
          screenOptions={{
            drawerStyle:{
              backgroundColor:'yellow',   //change bg color
              width:230    //change width of sidebar 
            }
          }}
          >
            <Drawer.Screen name="Home" component={Event} options={{ drawerIcon: DashboardIcon }} />
          </Drawer.Navigator>
        )}
      </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  
    );
  };
  
  export default NavDrawer;
  