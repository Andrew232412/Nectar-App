import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../../src/screens/WelcomeScreen';
import SignScreen from '../../src/screens/SignScreen';
import LoginScreen from '../../src/screens/LoginScreen';
import RegistrationScreen from '../../src/screens/RegistrationScreen';
import HomeScreen from '../../src/screens/HomeScreen';
import ExploreScreen from '../../src/screens/ExploreScreen';
import CartScreen from '../../src/screens/CartScreen';
import FavouriteScreen from '../../src/screens/FavouriteScreen';
import AccountScreen from '../../src/screens/AccountScreen';
import {useNavigate} from './hooks/useNavigate';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const getTabBarIcon = (routeName: string, color: string, size: number) => {
  let iconName;
  switch (routeName) {
    case 'Home':
      iconName = 'home-outline';
      break;
    case 'Explore':
      iconName = 'search-outline';
      break;
    case 'Cart':
      iconName = 'cart-outline';
      break;
    case 'Favourite':
      iconName = 'heart-outline';
      break;
    case 'Account':
      iconName = 'person-outline';
      break;
    default:
      iconName = 'circle-outline';
      break;
  }
  return <Ionicons name={iconName} size={size} color={color} />;
};

export default function HomeTabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => getTabBarIcon(route.name, color, size),
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Explore" component={ExploreScreen} />
        <Tab.Screen name="Cart" component={CartScreen} />
        <Tab.Screen name="Favourite" component={FavouriteScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

// type IconProps = {
//   color: string;
//   size: number;
// };

// const ShopIcon = ({color, size}: IconProps) => (
//   <Ionicons name="ios-home" color={color} size={size} />
// );

// const ExploreIcon = ({color, size}: IconProps) => (
//   <Ionicons name="ios-search" color={color} size={size} />
// );

// const CartIcon = ({color, size}: IconProps) => (
//   <Ionicons name="ios-cart" color={color} size={size} />
// );

// const FavouriteIcon = ({color, size}: IconProps) => (
//   <Ionicons name="ios-heart" color={color} size={size} />
// );

// const AccountIcon = ({color, size}: IconProps) => (
//   <Ionicons name="ios-person" color={color} size={size} />
// );

// const HomeTabNavigator = () => (
//   <Tab.Navigator>
//     <Tab.Screen
//       name="Shop"
//       component={HomeScreen}
//       options={{
//         tabBarIcon: ShopIcon,
//       }}
//     />
//     <Tab.Screen
//       name="Explore"
//       component={HomeScreen} // Update this to the correct component
//       options={{
//         tabBarIcon: ExploreIcon,
//       }}
//     />
//     <Tab.Screen
//       name="Cart"
//       component={HomeScreen} // Update this to the correct component
//       options={{
//         tabBarIcon: CartIcon,
//       }}
//     />
//     <Tab.Screen
//       name="Favourite"
//       component={HomeScreen} // Update this to the correct component
//       options={{
//         tabBarIcon: FavouriteIcon,
//       }}
//     />
//     <Tab.Screen
//       name="Account"
//       component={HomeScreen} // Update this to the correct component
//       options={{
//         tabBarIcon: AccountIcon,
//       }}
//     />
//   </Tab.Navigator>
// );

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
