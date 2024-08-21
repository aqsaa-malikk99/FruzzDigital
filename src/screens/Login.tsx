import React, {useState} from 'react';
import {Keyboard, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {GlobalStyles} from '../styles/GlobalStyles';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import TextInputComponent from '../components/TextInputComponent';
import SolidButton from '../components/SolidButton';
import {getFontFamily} from '../helpers/fontFamily';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Or use any other icon library
import {NavigationProps} from '../navigation/types';
import {useNavigation} from '@react-navigation/native';

function Login() {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [isValid, setIsValid] = useState({
    email: true,
    password: true,
  });
  const navigation = useNavigation<NavigationProps>();
  const validateEmail = email => {
    const testEmail = 'aqsa.ali@hotmail.com';
    return testEmail === email;
  };
  const validatePassword = password => {
    const testPassword = 12345678;
    return testPassword == password;
  };
  const login = () => {
    const emailValid = validateEmail(emailValue);
    const passwordValid = validatePassword(passwordValue);

    setIsValid({
      email: emailValid,
      password: passwordValid,
    });

    if (emailValid && passwordValid) {
      // Make the API call to register the user
      // Example: Routes.register({ email: emailValue, password: passwordValue });
      console.log('Login successful:', {
        email: emailValue,
        password: passwordValue,
      });
      // Navigate to the next screen or show a success message
      navigation.navigate('MainScreen');
    } else {
      // Show an error message or highlight invalid fields
      console.log('Login failed due to invalid inputs.');
      console.log(emailValue);
      console.log(passwordValue);
    }
  };
  return (
    <View style={styles.scaffold}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.mainContainer}>
          <Text style={[styles.title, {fontFamily: getFontFamily('bold')}]}>
            Welcome back! Glad to see you, Again!
          </Text>
          <TextInputComponent
            hintText="email"
            type="email"
            onChange={(text: string) => {
              setEmailValue(text);
            }}
          />
          {!isValid.email && (
            <Text style={styles.errorText}>Invalid email address</Text>
          )}
          <TextInputComponent
            hintText="password"
            type="password"
            onChange={(text: string) => {
              setPasswordValue(text);
            }}
          />
          {!isValid.password && (
            <Text style={styles.errorText}>Invalid password</Text>
          )}
          <View style={styles.forgotView}>
            <Text
              style={[
                styles.forgotText,
                {fontFamily: getFontFamily('medium')},
              ]}>
              Forgot Password
            </Text>
          </View>
          <SolidButton
            onPress={() => {
              login();
            }}
            title="Login"
          />
          <View style={styles.dividerView}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>Or Login With</Text>
            <View style={styles.dividerLine} />
          </View>
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
          <Text style={[styles.basicText, {fontFamily: getFontFamily('bold')}]}>
            Dont Have an Account?
          </Text>
          <TouchableOpacity
            onPress={() => {
              // navigation.navigate('Login');
            }}>
            <Text
              style={[styles.loginText, {fontFamily: getFontFamily('bold')}]}>
              Register Now
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
const styles = StyleSheet.create({
  scaffold: {backgroundColor: '#ffffff', flex: 1},
  mainContainer: {marginHorizontal: 10, marginVertical: 20},
  title: {
    color: '#1E232C',
    fontWeight: 500,
    fontSize: 34,
    letterSpacing: -1,
  },
  forgotView: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  forgotText: {
    color: '#6A707C',
  },
  dividerView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 30,
  },
  dividerLine: {flex: 1, height: 2, backgroundColor: '#E8ECF4'},
  dividerText: {color: '#6A707C', fontSize: 16, marginHorizontal: 10},
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

export default Login;
