// src/types.ts
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Register: undefined;
};

export type NavigationProps = NativeStackNavigationProp<RootStackParamList>;
