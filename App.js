import {statusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from '@react-navigation/stack';
import Login from './screens/Login';
import Home from './screens/Home';

export default function App() {
  const Stack = createStackNavigator();
  
  return (
    <View styles={{flex: 1, backgroundColor: 'orange'}}>
     <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Home" component="Home"/>
          <Stack.Screen name = "Login" component ={Login}/>
        </Stack.Navigator>
      </NavigationContainer>
    
     

    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  }
})
