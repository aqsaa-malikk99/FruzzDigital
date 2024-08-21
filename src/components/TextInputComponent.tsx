import React, {useState} from 'react';
import {TextInput, View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // or another icon library
import {getFontFamily} from '../helpers/fontFamily';

interface TextInputComponentProps {
  hintText: string;
  onChange: (text: string) => void;
  type: 'numeric' | 'alpha' | 'alphanumeric' | 'email' | 'password';
}

const TextInputComponent: React.FC<TextInputComponentProps> = ({
  hintText,
  onChange,
  type,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const getKeyboardType = () => {
    switch (type) {
      case 'numeric':
        return 'numeric';
      case 'email':
        return 'email-address';
      default:
        return 'default';
    }
  };

  const getSecureTextEntry = () => {
    return type === 'password' && !isPasswordVisible;
  };

  const validateInput = (text: string) => {
    switch (type) {
      case 'alpha':
        return /^[a-zA-Z]*$/.test(text);
      case 'alphanumeric':
        return /^[a-zA-Z0-9]*$/.test(text);
      case 'email':
        // Basic email validation (you can enhance it)
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(text);
      default:
        return true;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={hintText}
          keyboardType={getKeyboardType()}
          secureTextEntry={getSecureTextEntry()}
          placeholderTextColor="#8391A1"
          onChangeText={text => {
            if (validateInput(text)) {
              onChange(text);
            }
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={[
            styles.input,
            {
              borderColor: isFocused ? '#1E232C' : '#E8ECF4',
              color: '#1E232C',
              fontFamily: getFontFamily('normal'),
            },
          ]}
        />
        {type === 'password' && (
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
            <Icon
              name={isPasswordVisible ? 'visibility-off' : 'visibility'}
              size={24}
              color="#1E232C"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    height: 56,
    flex: 1,
    borderColor: '#E8ECF4',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#F7F8F9',
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: 15,
  },
});

export default TextInputComponent;
