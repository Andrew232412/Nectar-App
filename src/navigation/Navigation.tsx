import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../../src/screens/WelcomeScreen';
import SignScreen from '../../src/screens/SignScreen';
import LoginScreen from '../../src/screens/LoginScreen';
import RegistrationScreen from '../../src/screens/RegistrationScreen';
import HomeScreen from '../../src/screens/HomeScreen';
import {useNavigate} from './hooks/useNavigate';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  const ref = useNavigate();
  return (
    <NavigationContainer ref={ref}>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Sign" component={SignScreen} />
        <Stack.Screen name="LogIn" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={RegistrationScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
