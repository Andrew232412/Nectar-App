import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  useNavigation as useNativeNavigation,
  useRoute as useNativeRoute,
} from '@react-navigation/native';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

export interface ScreensParamsList {
  Welcome: undefined;
  Sign: undefined;
  LogIn: undefined;
  SignUp: undefined;
  Home: undefined;
  DOES_NOT_EXIST: undefined;
}
export type BottomTabParamList = {
  Shop: undefined;
  Explore: undefined;
  Cart: undefined;
  Favourite: undefined;
  Account: undefined;
};
export type Screen = keyof ScreensParamsList;
export type TabScreen = 'Sign';
export type RootTabsParamList = Pick<ScreensParamsList, TabScreen>;
export type RootStackParamList = Omit<ScreensParamsList, TabScreen>;

type StackScreenProp<S extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, S>;

type TabScreenProps<S extends keyof RootTabsParamList> = BottomTabScreenProps<
  RootTabsParamList,
  S
>;
export type ScreenProps<S extends keyof ScreensParamsList> = S extends TabScreen
  ? TabScreenProps<S>
  : S extends keyof RootStackParamList
  ? StackScreenProp<S>
  : never;

export type ScreenNavigationProp<S extends keyof ScreensParamsList> =
  ScreenProps<S>['navigation'];
export type ScreenRouteProp<S extends keyof ScreensParamsList> =
  ScreenProps<S>['route'];
export type ScreenRouteParams<S extends keyof ScreensParamsList> =
  ScreenProps<S>['route']['params'];

export function useRoute<T extends Screen>() {
  return useNativeRoute<ScreenProps<T>['route']>();
}

export function useNavigation<T extends Screen = 'DOES_NOT_EXIST'>() {
  return useNativeNavigation<ScreenProps<T>['navigation']>();
}
