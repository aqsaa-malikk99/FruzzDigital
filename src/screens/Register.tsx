import React, {useState} from 'react';
import {Keyboard, StyleSheet, Text, View} from 'react-native';
import TextInputComponent from '../components/TextInputComponent';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Or use any other icon library
import {getFontFamily} from '../helpers/fontFamily';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '../navigation/types';

function Register() {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [retypePasswordValue, setRetypePasswordValue] = useState('');
  const [isValid, setIsValid] = useState({
    email: true,
    password: true,
    retypePassword: true,
  });
  const navigation = useNavigation<NavigationProps>();

  const validateEmail = email => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };
  const validatePassword = password => {
    // Add any password validation logic here (e.g., minimum length, special characters)
    return password.length >= 6;
  };
  const register = () => {
    // Validate inputs before registering
    const emailValid = validateEmail(emailValue);
    const passwordValid = validatePassword(passwordValue);
    const retypePasswordValid = passwordValue === retypePasswordValue;

    setIsValid({
      email: emailValid,
      password: passwordValid,
      retypePassword: retypePasswordValid,
    });

    if (emailValid && passwordValid && retypePasswordValid) {
      // Make the API call to register the user
      // Example: Routes.register({ email: emailValue, password: passwordValue });
      console.log('Registration successful:', {
        email: emailValue,
        password: passwordValue,
      });
      // Navigate to the next screen or show a success message
      navigation.navigate('MainScreen');
    } else {
      // Show an error message or highlight invalid fields
      console.log('Registration failed due to invalid inputs.');
    }
  };
  return (
    <View style={styles.scaffold}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.mainContainer}>
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
          <View>
            <TextInputComponent
              hintText="Email"
              onChange={(text: string) => {
                setEmailValue(text);
              }}
              type="email"
            />
            {!isValid.email && (
              <Text style={styles.errorText}>Invalid email address</Text>
            )}
            <TextInputComponent
              hintText="Password"
              onChange={(text: string) => {
                setPasswordValue(text);
              }}
              type="password"
            />
            {!isValid.password && (
              <Text style={styles.errorText}>
                Password must be at least 6 characters long
              </Text>
            )}
            <TextInputComponent
              hintText="Retype Password"
              onChange={(text: string) => {
                setRetypePasswordValue(text);
              }}
              type="password"
            />
            {!isValid.retypePassword && (
              <Text style={styles.errorText}>Passwords do not match</Text>
            )}
            <TouchableOpacity
              style={{
                backgroundColor: '#1E232C',
                padding: 15,
                borderRadius: 5,
                alignItems: 'center',
              }}
              onPress={() => {
                register();
              }}>
              <Text
                style={{
                  fontSize: 18,
                  color: '#FFFFFF',
                  fontWeight: '500',
                  fontFamily: getFontFamily('bold'),
                }}>
                Register
              </Text>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 30,
              }}>
              <View style={{flex: 1, height: 2, backgroundColor: '#E8ECF4'}} />
              <Text
                style={{color: '#6A707C', fontSize: 16, marginHorizontal: 10}}>
                Or Register with
              </Text>
              <View style={{flex: 1, height: 2, backgroundColor: '#E8ECF4'}} />
            </View>
            <View style={styles.bottomContainer}>
              <View>
                <TouchableOpacity onPress={() => {}}>
                  <Icon name={'facebook'} size={56} color="#1E232C" />
                </TouchableOpacity>
              </View>

              <View>
                <TouchableOpacity onPress={() => {}}>
                  <Icon name={'apple'} size={56} color="#1E232C" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.textContainer}>
              <Text
                style={[styles.basicText, {fontFamily: getFontFamily('bold')}]}>
                Already Have an Account?
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Login');
                }}>
                <Text
                  style={[
                    styles.loginText,
                    {fontFamily: getFontFamily('bold')},
                  ]}>
                  Login Now
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  scaffold: {backgroundColor: '#ffffff', flex: 1},
  mainContainer: {
    marginHorizontal: 10,
    marginVertical: 20,
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    color: '#35C2C1',
    fontSize: 16,
    marginHorizontal: 1,
  },
  basicText: {
    color: '#6A707C',
    fontSize: 16,
    marginHorizontal: 1,
  },
  errorText: {
    color: 'red',
    marginVertical: 5,
  },
});
export default Register;
