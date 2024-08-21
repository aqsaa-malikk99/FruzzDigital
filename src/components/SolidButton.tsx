import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {getFontFamily} from '../helpers/fontFamily';

interface SolidButtonProps {
  title: string;
  onPress: () => void;
}

const SolidButton: React.FC<SolidButtonProps> = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={[styles.text, {fontFamily: getFontFamily('bold')}]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#1E232C',
    padding: 15,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '500',
  },
});

export default SolidButton;
