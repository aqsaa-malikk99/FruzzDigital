import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {getFontFamily} from '../helpers/fontFamily';

interface OutlineButtonProps {
  title: string;
  onPress: () => void;
}

const OutlineButton: React.FC<OutlineButtonProps> = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.outlineButton} onPress={onPress}>
      <Text
        style={[styles.buttonTextDark, {fontFamily: getFontFamily('normal')}]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  outlineButton: {
    backgroundColor: '#ffffff',
    borderColor: '#1E232C',
    borderWidth: 1,
    padding: 15,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonTextDark: {
    fontSize: 18,
    color: '#1E232C',
    fontWeight: '400',
  },
});
export default OutlineButton;
