import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigate} from './hooks/useNavigate';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import WelcomeScreen from '../screens/WelcomeScreen';
import SignScreen from '../screens/SignScreen';
import LoginScreen from '../screens/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import HomeScreen from '../screens/HomeScreen';
import ExploreScreen from '../screens/ExploreScreen';
import CartScreen from '../screens/CartScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import AccountScreen from '../screens/AccountScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const screenOptions = ({route}: {route: any}) => ({
  tabBarIcon: ({color, size}: {color: string; size: number}) => {
    let iconName: string;

    switch (route.name) {
      case 'Shop':
        iconName = 'shop';
        break;
      case 'Explore':
        iconName = 'search-outline';
        break;
      case 'Cart':
        iconName = 'shoppingcart';
        break;
      case 'Favorite':
        iconName = 'heart';
        break;
      case 'Account':
        iconName = 'ios-person';
        break;
      default:
        iconName = 'ellipse-outline';
        break;
    }

    return <Ionicons name={iconName} size={size} color={color} />;
  },
  headerShown: false,
});

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Shop" screenOptions={screenOptions}>
      <Tab.Screen name="Shop" component={HomeScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Favorite" component={FavoriteScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};

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
        <Stack.Screen
          name="HomeTabNavigator"
          component={HomeTabNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
