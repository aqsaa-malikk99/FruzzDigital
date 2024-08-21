import React from 'react';
import {Text} from 'react-native';
import {getFontFamily} from '../helpers/fontFamily';
function MainScreen() {
  return (
    <Text
      style={{
        color: '#1E232C',
        fontWeight: 500,
        fontSize: 34,
        letterSpacing: -1,
        fontFamily: getFontFamily('medium'),
      }}>
      Hello! Register to get started
    </Text>
  );
}
export default MainScreen;
